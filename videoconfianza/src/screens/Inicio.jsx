import loadable from '@loadable/component'
import React from "react";
import "animate.css/animate.min.css";
import FloatingWhatsApp from "react-floating-whatsapp";
import vc from "../media/vc.jpeg";
import camras from "../media/camras.jpg";
const Footer = loadable(() => import('./Footer'))
const Servicios = loadable(() => import('./Servicios'))
const Presentacion = loadable(() => import('./Presentacion'))
const Derechos = loadable(() => import('./Derechos'))
const BotonTienda = loadable(() => import('./Servicios/BotonTienda'))
const Buttons = loadable(() => import('./Buttons'))





const Inicio = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-400 to-blue-500">
      <div
        className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-scroll"
        style={{
          backgroundImage: `url(${camras})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //adjust the opacity of the background image and the color
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          // add animate__animated animate__zoomInDown
        }}
      >
        <h1 className="text-gray-100 text-center font-extrabold md:text-7xl text-3xl  animate__animated animate__zoomInDown">
          CÁMARAS DE SEGURIDAD, REDES Y ALARMAS{" "}
        </h1>

        <h2 className="text-white text-center font-bold md:text-2xl text-xl my-10 mx-auto animate__animated animate__zoomInUp">
          Somos instaladores y distribuidores de las marcas #1 en el mercado
        </h2>

        <BotonTienda />
        <Buttons />
      </div>

      {/*     <div>
        <Testimonios />
      </div> */}

      {/*        <div>
        <Collage />
      </div>  */}

      <div className="animate__animated animate__zoomInDown my-10">
        <Presentacion />
      </div>

      <div>
        <Servicios />
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <Derechos />
      </div>

      <FloatingWhatsApp
        phoneNumber="+525513450478"
        accountName="Video Confianza"
        avatar={vc}
        statusMessage="Enviar mensaje"
        chatMessage="Hola, ¿En qué podemos ayudarte?"
        placeholder="Escribe tu mensaje"
      />
    </div>
  );
};

export default Inicio;
