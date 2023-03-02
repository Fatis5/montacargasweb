import React from "react";
import Buttons from "../Buttons";

import {FaCashRegister} from "react-icons/fa";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import pventa from "../../media/pventa.jpeg";


const Pventa = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${pventa})`,
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
          backgroundImage: `url(${pventa})`,
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
            Instalación de puntos de venta.
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
              Administra mejor tu negocio.
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
            Con la instalación de un punto de venta, podrás tener un mejor control de tus ingresos y evitar los robos hormiga
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={pventa}
            alt=""
          />
          <div className="mx-auto my-5">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col my-20">
        <div className="bg-blue-600 md:w-1/2">
          <FaCashRegister className="text-black text-7xl mx-10" />
          <br />
          <h1 className="font-bold txt-3xl text-white mx-10">
            Puntos de venta
          </h1>
          <p className="text-white mx-10">
            Con la instalación de un punto de venta, podrás tener un mejor control de tus ingresos y evitar los robos hormiga.
          </p>
        </div>
        <div className=" bg-blue-500  md:w-1/2  ">
          <p className="mx-10 text-white my-3 font-bold">Algunas funciones:</p>
          <li className="mx-10 text-white">Administra ingresos y egresos.</li>
          <li className="mx-10 text-white">
            Notificaciones de stock bajo
          </li>
          <li className="mx-10 text-white">Cortes todos los días.</li>
          <li className="mx-10 text-white">Generar tickets</li>
          <li className="mx-10 text-white">
            Ver las ganancias diarias.
          </li>
        </div>
      </div>


      <div className="flex mx-auto my-5 justify-center">
        <Buttons />
      </div>
      <Footer />
      <Derechos />
    </div>
  );
}

export default Pventa