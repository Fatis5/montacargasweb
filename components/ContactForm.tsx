"use client";
import { useState } from "react";
import { SERVICES, waLink } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const field =
    "w-full rounded-md border border-black/15 bg-white px-4 py-3 outline-none focus:border-safety focus:ring-2 focus:ring-safety/40 transition";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = new FormData(e.currentTarget);

    const body = {
      nombre: f.get("nombre") as string,
      empresa: f.get("empresa") as string,
      telefono: f.get("telefono") as string,
      servicio: f.get("servicio") as string,
      equipo: f.get("equipo") as string,
      ubicacion: f.get("ubicacion") as string,
      mensaje: f.get("mensaje") as string,
      hp: f.get("hp") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus("ok");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Hubo un problema. Por favor intenta de nuevo o escríbenos por WhatsApp.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("No se pudo conectar. Por favor escríbenos directamente por WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <div className="text-4xl mb-3" aria-hidden>✓</div>
        <h2 className="display text-2xl font-extrabold uppercase text-green-800">¡Mensaje enviado!</h2>
        <p className="mt-2 text-green-700">Te contactamos en horario laboral (lun–sáb 9–18 h). Si necesitas respuesta inmediata, escríbenos por WhatsApp.</p>
        <a href={waLink()} target="_blank" rel="noopener" className="btn-primary mt-5 inline-flex">
          Ir a WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-black/10 bg-white p-6 sm:grid-cols-2" noValidate>
      {/* Honeypot anti-spam: oculto para humanos */}
      <div className="hidden" aria-hidden="true">
        <label>Déjalo vacío<input name="hp" type="text" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="grid gap-1 text-sm font-semibold">
        Nombre *
        <input name="nombre" required minLength={2} maxLength={100} className={field} disabled={status === "sending"} />
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Empresa
        <input name="empresa" maxLength={100} className={field} disabled={status === "sending"} />
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Teléfono *
        <input name="telefono" type="tel" required maxLength={20} className={field} disabled={status === "sending"} />
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Servicio
        <select name="servicio" className={field} disabled={status === "sending"}>
          {SERVICES.map((s) => <option key={s.slug}>{s.name}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Marca y modelo del equipo
        <input name="equipo" placeholder="Ej. Hangcha CPCD25" maxLength={200} className={field} disabled={status === "sending"} />
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Ubicación / parque industrial
        <input name="ubicacion" placeholder="Ej. Parque Industrial Cuamatla" maxLength={200} className={field} disabled={status === "sending"} />
      </label>
      <label className="grid gap-1 text-sm font-semibold sm:col-span-2">
        Detalles
        <textarea name="mensaje" rows={4} maxLength={2000} className={field} disabled={status === "sending"} />
      </label>

      <div className="sm:col-span-2 flex flex-col gap-3">
        <button
          type="submit"
          className="btn-primary w-full disabled:opacity-60"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
        <p className="text-center text-xs text-iron">
          O escríbenos directamente por{" "}
          <a href={waLink()} target="_blank" rel="noopener" className="font-semibold underline decoration-safety decoration-2 underline-offset-2">
            WhatsApp
          </a>
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="sm:col-span-2 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
