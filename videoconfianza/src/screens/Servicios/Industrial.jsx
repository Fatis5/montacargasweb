import React from "react";
import Tesis2 from "../../media/Tesis2.jpeg";
import Buttons from "../Buttons";
import camras from "../../media/camras.jpg";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {RiAlarmWarningFill} from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Industrial = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${Tesis2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="flex md:flex-row flex-col"
        style={{
          backgroundImage: `url(${camras})`,
          backgroundSize: "cover",
          backgroundPosition: " center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="my-auto mx-auto justify-center">
          <h1 className="text-white md:text-8xl text-5xl font-bold  text-center mx-auto ">
            Instalación de cámaras de seguridad
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
              ¡Si no existe lo diseñamos!
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
            Sabemos que todos los negocios son diferentes y en ocasiones no hay sistemas que se adaptan a tu negocio, por eso nosotros te ayudamos a crear un sistema que se adapte a tus necesidades.
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={Tesis2}
            alt=""
          />
          <div className="mx-auto my-5">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="flex mx-auto my-20 align-center">
        <div className="bg-blue-600 md:w-1/2">
          <RiAlarmWarningFill className="text-black text-7xl mx-10" />
          <br />
          <h1 className="font-bold txt-3xl text-white mx-10">
            Diseño a tu medida.
          </h1>
          <p className="text-white mx-10">
            Diseñamos y ensamblamos tu alarma que tengas en mente, ya que aquí trabajan los mejores ingenieros del país especialistas en hardware y software.
          </p>
        </div>
      </div>

      <div className="flex mx-auto my-5 justify-center">
        <Buttons />
      </div>
      <Footer />
      <Derechos />
    </div>
  )
}

export default Industrial