import React from "react";

import camera2 from "../../media/camera2.jpg";
import Buttons from "../Buttons";
import camras from "../../media/camras.jpg";

import test3 from "../../media/test3.jpg";
import { TbDeviceCctv } from "react-icons/tb";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";

import ia3 from "../../media/ia3.png";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Cctv = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${camera2})`,
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
              Aumenta tu seguridad con un sistema de video vigilancia.
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
            Invertir en un sistema de CCTV, resulta una buena opción para la
            máxima seguridad de tu familia, pertenencias, viviendas o negocios.
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={test3}
            alt=""
          />
          <div className="mx-auto my-5">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col my-20">
        <div className="bg-blue-600 md:w-1/2">
          <TbDeviceCctv className="text-black text-7xl mx-10" />
          <br />
          <h1 className="font-bold txt-3xl text-white mx-10">
            Aplicación móvil
          </h1>
          <p className="text-white mx-10">
            Una potente aplicación móvil fácil de usar. La aplicación GDMSS nos
            permite visualizar en tiempo real, grabaciones, tomar capturas en el
            teléfono y videos, interactuar con el DVR, etc.
          </p>
        </div>
        <div className=" bg-blue-500  md:w-1/2  ">
          <p className="mx-10 text-white my-3 font-bold">Algunas funciones:</p>
          <li className="mx-10 text-white">Monitoreo en tiempo real</li>
          <li className="mx-10 text-white">
            Notificaciones al detectar movimiento{" "}
          </li>
          <li className="mx-10 text-white">Revisar grabaciones</li>
          <li className="mx-10 text-white">Girar cámaras ptz</li>
          <li className="mx-10 text-white">
            Escuchar audio de cámaras con esa función
          </li>
          <li className="mx-10 text-white mb-10">
            Monitoreo de múltiples DVR en una sola aplicación
          </li>
        </div>
      </div>

      <div className="flex flex-col bg-blue-700 w-auto">
        <h1 className="text-center font-bold text-white text-5xl">
          ¡Lo mejor de todo!
        </h1>
        <p className="text-center text-3xl text-white my-5">
          Es que somos especialistas en video vigilancia con inteligencia
          artificial.
        </p>
        <p className="text-center text-2xl text-white my-5">
          Así podrás recibir alertas de movimiento o humanos en tiempo real a tu
          celular.
        </p>
        <img
          className="mx-auto rounded-3xl mb-10 md:w-1/2 justify-center flex"
          src={ia3}
          alt="opencv"
        />
      </div>

      <div className="flex mx-auto my-5 justify-center">
        <Buttons />
      </div>
      <Footer />
      <Derechos />
    </div>
  );
};

export default Cctv;
