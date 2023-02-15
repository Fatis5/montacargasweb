import React from "react";
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
import camras from "../media/camras.jpg";
import Footer from "./Footer";
import Collage from "./Collage";
import Servicios from "./Servicios";
import Testimonios from "./Testimonios";
import { useInView } from "react-intersection-observer";
import Presentacion from "./Presentacion";
import Derechos from "./Derechos";
import { Animated } from "react-animated-css";
import Navbar2 from "./Navbar2";
import { GiCctvCamera } from "react-icons/gi";
import BotonTienda from "./Servicios/BotonTienda";
import Buttons from "./Buttons";

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
          CÁMARAS DE SEGURIDAD, REDES Y ALARMAS        </h1>

        <h3 className="text-white text-center font-bold md:text-2xl text-xl my-10 mx-auto animate__animated animate__zoomInUp">
          Somos instaladores y distribuidores de las marcas #1 en el mercado
        </h3>
 
        <BotonTienda />
        <Buttons/>
   

      </div>

  {/*     <div>
        <Testimonios />
      </div> */}

 

{/*        <div>
        <Collage />
      </div>  */}

   

      <div
      className="animate__animated animate__zoomInDown my-10"
      >
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
