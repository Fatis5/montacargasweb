import React from "react";
import puntos from "../../media/puntos.png";
import puntopunto from "../../media/puntopunto.png";
import Buttons from "../Buttons";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {BsSoundwave} from "react-icons/bs";

const Enlaces = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${puntopunto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div
        className="flex md:flex-row flex-col"
        style={{
          backgroundImage: `url(${puntopunto})`,
          backgroundSize: "cover",
          backgroundPosition: " center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="my-auto mx-auto justify-center">
          <h1 className="text-white md:text-8xl text-5xl font-bold  text-center mx-auto ">
            Enlaces de largo alcance.
          </h1>
        </div>


      </div>

      <div className="bg-orange-500 mt-32 ">
        <div className="flex flex-row">
          <AiOutlineCheckCircle className="w-32 h-16 text-white" />
          <h1 className="tex-center text-5xl text-center text-white mx-10 font-mono  my-10">
            Siempre nos ajustamos a tu presupuesto.
          </h1>
        </div>
      </div>

      <div className="  bg-gradient-to-r from-blue-900 to-blue-700 ">
        <div className="flex justify-center flex-col  mx-10">
          <div className="flex flex-row">
            <AiOutlineCheckCircle className="w-32 h-32  text-white" />
            <h1 className="tex-center text-5xl text-center text-white mx-10 font-mono  my-10">
              Mantén siempre conectada a tu empresa.
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
           Hoy en dia estar conectados a internet 24/7 es una necesidad para cualquier empresa, ya sea para mantenerse en contacto con sus clientes, proveedores o para mantenerse al tanto de las ultimas noticias de su sector.
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={puntos}
            alt=""
          />
          <div className="mx-auto my-5">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col my-20">
        <div className="bg-blue-600 md:w-1/2">
          <BsSoundwave className="text-black text-7xl mx-10" />
          <br />
          <h1 className="font-bold txt-3xl text-white mx-10">
            Conectividad 24/7.
          </h1>
          <p className="text-white mx-10">
            No sufras más por los cortes de internet, nosotros te ayudamos a que tengas conectividad a todo momento con enlaces inalámbricos.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-blue-700 w-auto">
        <h1 className="text-center font-bold text-white text-5xl">
          ¡Lo mejor de todo!
        </h1>
        <p className="text-center text-3xl text-white my-5">
          Es que somos especialistas en enlaces de largo alcance.
        </p>
        <p className="text-center text-2xl text-white my-5">
          Asi siempre estarás conectado.
        </p>
      </div>

      <div className="flex mx-auto my-5 justify-center">
        <Buttons />
      </div>
      <Footer />
      <Derechos />
    </div>
  );
}

export default Enlaces