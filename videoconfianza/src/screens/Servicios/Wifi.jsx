import React from "react";
import puntos from "../../media/puntos.png";
import wifi4 from "../../media/wifi4.png";
import puntopunto from "../../media/puntopunto.png";
import Buttons from "../Buttons";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {AiOutlineWifi} from "react-icons/ai";
import {BsSoundwave} from "react-icons/bs";
import wifizone from "../../media/wifizone.jpg";
import {FcWiFiLogo} from "react-icons/fc";

const Wifi = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (
    <div
      className="bg-fixed hover:bg-fixed"
      style={{
        backgroundImage: `url(${wifi4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <div
        className="flex md:flex-row flex-col"
        style={{
          backgroundImage: `url(${wifi4})`,
          backgroundSize: "cover",
          backgroundPosition: " center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <div className="my-auto mx-auto justify-center">
          <h1 className="text-white md:text-8xl text-5xl font-bold  text-center mx-auto ">
            WIFI ZONE
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
              Conecta a tus clientes a WIFI.
            </h1>
          </div>
          <p className="my-5 text-white text-4sm  text-justify font-mono">
           Hoy en día estar conectados a una red es necesario, porque el mundo lo pide, así que nosotros te ayudamos a que tus clientes estén conectados a una red de alta velocidad y con una excelente cobertura mientras se encuentran en tu establecimiento.
          </p>
          <img
            className="rounded-xl md:w-1/2 mx-auto my-10"
            src={wifizone}
            alt=""
          />
          <div className="mx-auto my-5">
            <Buttons />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col my-20">
        <div className="bg-blue-600 md:w-1/2">
          <AiOutlineWifi className="text-black text-7xl mx-10" />
          <br />
          <h1 className="font-bold txt-3xl text-white mx-10">
            Clientes satisfechos.
          </h1>
          <p className="text-white mx-10">
            Se ha demostrado que los clientes prefieren asistir a lugares donde la conectividad a internet no es problema y en restaurantes suelen consumir hasta un 50% más cuando tienen el servicio de wifi de alta calidad.
          </p>
        </div>
      </div>
      <div className=" bg-blue-500  md:w-1/2  ">
          <p className="mx-10 text-white my-3 font-bold">Beneficios:</p>
          <li className="mx-10 text-white">Más clientes</li>
          <li className="mx-10 text-white">
            Incremento en el consumo de los clientes
          </li>
          <li className="mx-10 text-white"> Mejor presentación de tu negocio </li>
          <li className="mx-10 text-white">Una propuesta de valor para tu negocio </li>
          <li className="mx-10 text-white">
           Más clientes felices y satisfechos
          </li>
          <li className="mx-10 text-white mb-10">
            Los clientes adultos podrán pasarla muy bien mientras sus hijos pequeños juegan sus videojuegos en su celular
          </li>
        </div>

      <div className="flex mx-auto my-5 justify-center">
        <Buttons />
      </div>
      <Footer />
      <Derechos />
    </div>
  );
}

export default Wifi