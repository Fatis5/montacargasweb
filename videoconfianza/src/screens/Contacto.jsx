import React from "react";
import Form from "../screens/Form";
import Maps from "./Maps";
import { FaBeer, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Contacto = () => {
  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  return (

      <div className="flex md:flex-row flex-col align-center bg-slate-900 ">
        <div className="flex">
          <div className="mx-auto text-white mt-10 ml-4 ">
            <h1 className="mb-3 mx-auto text-5xl">Contáctanos:</h1>
            <div className="flex flex-row mr-1 mt-1 mb-1 items-stretch ">
              <FaWhatsapp className="mt-3 text-3xl"/>
              <a className="mt-3  text-xl md:text-3xl" href="tel:5513450478" hover="red">
                55-13-45-04-78
              </a>
            </div>

            <div className="flex flex-row mr-1 mt-1 mb-1">
              <HiOutlineMail className="mt-3 mx-auto text-3xl"/>
              <a className="mt-3 mx-3 md:mx-auto text-xl md:text-3xl" href="mailto: cotizaciones@videoconfianza.com" hover="red">
              cotizaciones@videoconfianza.com
              </a>
            </div>

            <h2 className="mt-5 mx-auto text-3xl">Horario</h2>
            <h2 className=" mx-auto text-2xl">Lunes - Sábado: 9:00 - 18:00 hrs.</h2>
          </div>
        </div>
        <div className="bg-blue-900 mx-20 my-10 rounded-xl">
          <Form />
        </div>
        <div className="my-10 mx-auto rounded-xl">
          <Maps />
        </div>
      </div>

  );
};

export default Contacto;
