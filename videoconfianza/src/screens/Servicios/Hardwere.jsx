import React from "react";
import Buttons from "../Buttons";

import {FaCashRegister} from "react-icons/fa";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import circuito from "../../media/circuito.png";

const Hardwere = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${circuito})`,
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
          backgroundImage: `url(${circuito})`,
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
            Diseño de Hardware.
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
              Tus ideas de electronica las hacemos posibles.
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
            Sabemos que a ti se te han ocurrido muchas ideas de hacer las cosas mas fáciles en tu empresa con ayuda de la electrónica o automatización pero no existe tal cual como lo quieres, nosotros te ayudamos a hacerlo realidad.
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={circuito}
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
            Diseño de Hardware personalizado.
          </h1>
          <p className="text-white mx-10">
            Diseñamos hardware personalizado para tu empresa, con el fin de mejorar la producción y evitar las mermas.
          </p>
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

export default Hardwere