import { NextRequest } from "next/server";
import { z } from "zod";
import { SITE } from "@/lib/site";

const schema = z.object({
  nombre: z.string().min(2, "El nombre es requerido").max(100),
  empresa: z.string().max(100).optional(),
  telefono: z.string().min(7, "Teléfono requerido").max(20),
  servicio: z.string().max(150),
  equipo: z.string().max(200).optional(),
  ubicacion: z.string().max(200).optional(),
  mensaje: z.string().max(2000).optional(),
  hp: z.string().max(0, "Bot detectado").optional(), // honeypot: debe estar vacío
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Si el honeypot tiene contenido, es un bot: fingir éxito silenciosamente
    if (data.hp) return Response.json({ ok: true });

    const html = `
      <h2 style="font-family:sans-serif;color:#14161a">Nueva cotización desde ${SITE.url}</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
        <tr><th align="left" style="padding:8px;background:#f5f4f0;width:160px">Nombre</th><td style="padding:8px;border-bottom:1px solid #eee">${data.nombre}</td></tr>
        <tr><th align="left" style="padding:8px;background:#f5f4f0">Empresa</th><td style="padding:8px;border-bottom:1px solid #eee">${data.empresa ?? "—"}</td></tr>
        <tr><th align="left" style="padding:8px;background:#f5f4f0">Teléfono</th><td style="padding:8px;border-bottom:1px solid #eee">${data.telefono}</td></tr>
        <tr><th align="left" style="padding:8px;background:#f5f4f0">Servicio</th><td style="padding:8px;border-bottom:1px solid #eee">${data.servicio}</td></tr>
        <tr><th align="left" style="padding:8px;background:#f5f4f0">Equipo</th><td style="padding:8px;border-bottom:1px solid #eee">${data.equipo ?? "—"}</td></tr>
        <tr><th align="left" style="padding:8px;background:#f5f4f0">Ubicación</th><td style="padding:8px;border-bottom:1px solid #eee">${data.ubicacion ?? "—"}</td></tr>
        <tr><th align="left" style="padding:8px;background:#f5f4f0">Mensaje</th><td style="padding:8px">${data.mensaje ?? "—"}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:12px;color:#888;margin-top:16px">Enviado desde ${SITE.url}</p>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? SITE.email;

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `${SITE.name} <noreply@montacargasteoloyucan.com>`,
        to: [toEmail],
        replyTo: data.nombre && data.telefono ? undefined : undefined,
        subject: `Cotización: ${data.nombre} — ${data.servicio}`,
        html,
      });
    } else {
      // Sin RESEND_API_KEY: solo loguear para desarrollo
      console.log("[/api/contacto] RESEND_API_KEY no configurada. Datos recibidos:", {
        nombre: data.nombre, empresa: data.empresa, telefono: data.telefono, servicio: data.servicio,
      });
    }

    return Response.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json({ ok: false, errors: err.flatten().fieldErrors }, { status: 400 });
    }
    console.error("[/api/contacto] Error:", err);
    return Response.json({ ok: false, error: "Error interno. Por favor llámenos directamente." }, { status: 500 });
  }
}
