import React from "react";
import acces89 from "../../media/acces89.jpg";
import acces43 from "../../media/acces43.jpg";
import acceso77 from "../../media/acceso77.jpg";
import Buttons from "../Buttons";
import camras from "../../media/camras.jpg";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Acces = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${acces89})`,
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
            Instalación de control de acceso
          </h1>
        </div>

        {/*         <div className="w-1/2 flex mx-auto justify-center my-auto">
        <img
          src={vc}
          className="w-auto md:w-auto md:h-52 h-auto mx-auto rounded-2xl"
          alt="full"
        />
      </div> */}
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
              Controla la hora de entrada de tus empleados
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
            Invertir en un sistema de control de acceso ayuda a que los usuarios
            prueben ser quienes dicen que son. Es como cuando en algún lugar
            debes mostrar tu documento de identidad para comprobar que
            efectivamente tienes dicha identidad. El control de acceso es
            sumamente importante para que todos los usuarios tengan el acceso
            correspondiente a datos y recursos de sistema de tu empresa.
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={acceso77}
            alt=""
          />
          <div className="mx-auto my-5">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-blue-700 w-auto">
        <h1 className="text-center font-bold text-white text-5xl">
          ¡Lo mejor de todo!
        </h1>
        <p className="text-center text-3xl text-white my-5">
          Es que somos especialistas en controles de acceso con barométricos.
        </p>
        <p className="text-center text-2xl text-white my-5">
          Asi tus trabajadores no tendrán pretextos para ingresar a tu empresa
          ya que no necesitan tarjeta como en los controles de acceso
          tradicionales.
        </p>
        <img
          className="mx-auto rounded-3xl mb-10 md:w-1/2 justify-center flex"
          src={acces43}
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

export default Acces;
