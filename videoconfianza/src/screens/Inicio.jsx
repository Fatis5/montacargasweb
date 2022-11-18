import React from "react";
import camrasvideo from "../media/camrasvideo.mp4";
import camera2 from "../media/camera2.jpg";
import "animate.css/animate.min.css";
import dahua from "../media/dahua.jpg";
import dahuapn from "../media/dahuapn.png";
import testimonio1 from "../media/testimonio1.jpg";
import test2 from "../media/test2.jpg";
import test3 from "../media/test3.jpg";
import test4 from "../media/test4.jpg";
import testbg from "../media/testbg.jpg";
import full from "../media/full.jpg";
import FloatingWhatsApp from "react-floating-whatsapp";
import vc from "../media/vc.jpeg";
import Contacto from "./Contacto";
import Footer from "./Footer";
import Collage from "./Collage";
import Servicios from "./Servicios";
import Testimonios from "./Testimonios";
import { useInView } from "react-intersection-observer";
import Presentacion from "./Presentacion";
import Derechos from "./Derechos";
import { Animated } from "react-animated-css";
import Navbar2 from "./Navbar2";

const Inicio = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-400 to-blue-500">
      
      <div>
        <h1 className="text-gray-100 text-center font-extrabold md:text-7xl text-6xl  animate__animated animate__zoomInDown">
          Instalación de Cámaras de Seguridad Inteligentes (CCTV).
        </h1>

        <h2 className="mt-10 text-black text-center font-extrabold md:text-5xl text-4xl  animate__animated animate__zoomInDown">
          Desde $3,000 MXN
        </h2>

        <h3 className="text-white text-center font-bold md:text-2xl text-xl my-10 mx-auto animate__animated animate__zoomInUp">
          Somos instaladores y distribuidores de las marcas #1 en el mercado
        </h3>
      </div>

      <div>
        <div>
          <Collage />
        </div>

        <div>
          <Presentacion />
        </div>

        <div>
          <Servicios />
        </div>

        <div>
          <Testimonios />
        </div>

        <div>
          <Footer />
        </div>

        <div>
          <Derechos />
        </div>
      </div>

      <FloatingWhatsApp
        phoneNumber="+5215522815315"
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
