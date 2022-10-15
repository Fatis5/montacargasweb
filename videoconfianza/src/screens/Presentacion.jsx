import React from "react";
import { useInView } from "react-intersection-observer";
import test4 from "../media/test4.jpg";

const Presentacion = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-100px 0px 0px 0px",

  });
  return (
    
  
        <div className="h-max bg-gray-900 rounded-xl md:columns-2 md:mx-10 mx-4 mt-16 animate__animated animate__pulse">
          <h1 className="text-gray-50 md:text-3xl  text-xl text-justify mt-50 mx-3">
            {" "}
            <span className="font-bold md:text-4xl">Video Confianza</span> es
            una empresa que cuenta con{" "}
            <span className="font-bold md:text-4xl"> ingenieros</span>{" "}
            especializados en seguridad inteligente.
          </h1>
          <p className="text-gray-100 text-xl mx-3 mt-8 text-justify">
            Nuestra especialidad es la instalación de cámaras con Inteligencia
            Artificial.
          </p>

          <p className="text-gray-100 text-md mx-3 mt-8 text-justify">
            Sabemos que la seguridad es un asunto de alta importancia. No se
            trata solo de sentirse seguro estando en casa, sino también cuando
            estás fuera. Es por ello que nos encargamos de realizar la
            instalación de sistemas de seguridad a la medida para casas,
            oficinas, negocios, etc.
          </p>
          <img className="rounded-2xl h-10/12 mx-auto" src={test4} />
        </div>
  );
};

export default Presentacion;
