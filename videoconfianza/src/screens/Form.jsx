import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0pwzid",
        "template_e2fnnzm",
        form.current,
        "FIwDbufdVdz85n-HK"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert("correo enviado con éxito, en breve nos comunicaremos contigo");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col align-center rounded-2xl "
      ref={form}
      onSubmit={sendEmail}
    >

      <label 
      htmlFor="Contacto"
      className="text-white mt-2 mx-auto text-xl font-bold">
        También puedes enviarnos un correo
      </label>
      <label 
      htmlFor="Nombre"
      className="text-white mt-2 mx-auto">Nombre</label>
      <input
        className="rounded-lg mx-2 h-10 text-xl"
        type="text"
        name="user_name"
       

      />
      <label 
      htmlFor="Email"
      className="text-white mt-2 mx-auto text-xl">Email</label>
      <input className="rounded-lg mx-2 h-10" type="email" name="user_email" />
      <label 
      htmlFor="Teléfono"
      className="text-white mt-2 mx-auto text-xl ">Teléfono</label>
      <input
        className="rounded-lg mx-2 h-10 text-xl text-center"
        type="tel"
        name="telefono"
      />
      <label 
      htmlFor="Mensaje"
      className="text-white mt-2 mx-auto text-xl">Mensaje</label>
      <textarea
      typeof="text"
     
      className="rounded-lg mx-2 h-20" rows="5" name="message" />

      <input
        className="bg-black hover:bg-gray-700 text-white font-bold mx-auto mt-2 rounded focus:outline-none focus:shadow-outline text-xl uppercase py-0 px-4"
        type="submit"
        value="Enviar"
        
      />
  
    </form>
  );
};

export default Form;
