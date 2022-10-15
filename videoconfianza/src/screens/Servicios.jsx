import { React, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import "animate.css/animate.min.css";
import CountUp from "react-countup";
import vc from "../media/vc.jpeg";
import camras from "../media/camras.jpg";
import Tesis2 from "../media/Tesis2.jpeg";
import pventa from "../media/pventa.jpeg";
import circuito from "../media/circuito.png";
import puntopunto from "../media/puntopunto.png";
import paginaweb from "../media/paginaweb.jpg";
import cacces from "../media/cacces.jpg";
import wifizone from "../media/wifizone.jpg";
import AlarmasVecinales from "../media/AlarmasVecinales.jpg";
import { v4 as uuidv4 } from "uuid";
import Cctv from "../screens/Servicios/Cctv";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import domotica from "../media/domotica.jpg";
import CardShopping from 'react-card-shopping';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import 'react-card-shopping/src/card.css';
const Servicios = () => {

  const location = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const [Servicios, setServicios] = useState([
    {
      id: uuidv4(),
      imagen: camras,
      servicio: "Instalación y mantenimiento de CCTV",
      descripcion:
        "Un ingeniero de Video Confianza te dará la mejor solución para tus necesidades de CCTV en tu casa, oficina, negocio o empresa",
      route: "/cctv",
    },
    {
      id: uuidv4(),
      servicio: "Controles de acceso",
      imagen: cacces,
      descripcion:
        "Los controles de acceso es una herramienta que te permitirá controlar el acceso a tu casa, oficina, negocio o empresa",
      route: "/acces",
    },
    {
      id: uuidv4(),
      servicio: "Alarmas Vecinales",
      imagen: AlarmasVecinales,
      descripcion:
        "Las alarmas vecinales harán que tu vecindario sepa que estas en peligro con solo presionar un botón",
      route: "/vecinos",
    },
    {
      id: uuidv4(),
      servicio:
        "Instalación o creación de puntos de venta según tus necesidades",
      imagen: pventa,
      descripcion:
        "Video Confianza sabe que los robos hormiga son un problema en los negocios, es por eso que nosotros te instalamos el mejor punto de venta según tus necesidades",
      route: "/pventa",
    },
    {
      id: uuidv4(),
      imagen: Tesis2,
      servicio: "Instalación y diseño de alarmas industriales",
      descripcion:
        "Si la alarma que buscas para tu empresa no está disponible en el mercado, nosotros te podemos ayudar a diseñarla",
      route: "/industrial",
    },
    {
      id: uuidv4(),
      servicio: "Enlaces inalámbricos de largo alcance para tu empresa",
      imagen: puntopunto,
      descripcion:
        "Los enlaces inalámbricos de largo alcance son una herramienta que te permitirá conectar tu empresa con el mundo",
      route: "/enlaces",
    },
    {
      id: uuidv4(),
      servicio: "Diseño de hardware especializado",
      imagen: circuito,
      descripcion:
        "Video Confianza puede diseñar hardware especializado que te permita optimizar tu empresa",
      route: "/hardwere",
    },
    {
      id: uuidv4(),
      servicio: "WI-FI Zone para tu empresa o negocio",
      imagen: wifizone,
      descripcion:
        "Tener internet para tus clientes en cualquier rincón de tu negocio o empresa de forma controlada ya no es un lujo, si no una necesidad para que tus clientes estén siempre con una conexión a internet",
      route: "/wifi",
    },
  ]);


  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500">
    <div >

      <h1 className=" text-center py-10 text-white text-8xl animate__animated animate__fadeInUp"> Servicios:</h1>

    </div>

    <div  className="flex flex-wrap justify-center">
   
        {Servicios.map((servicio) => (
         
          <div key={servicio.id}>
            <div className="max-w-xs  mx-10 my-4  overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800">
              <img
                className="object-cover h-60 w-full"
                src={servicio.imagen}
                alt="avatar"
              />
  
              <div className="py-5 text-center">

              <span  className="block text-2xl font-bold text-gray-800 dark:text-white">{servicio.servicio}</span>

                <span className="text-sm text-gray-700 dark:text-gray-200 text-justify">
                  {servicio.descripcion}
                </span>

                <Link to={servicio.route}>
                <div className="bg-gray-200 mt-4 rounded-3 border-2 border-green-700 mx-3">
                  <p>Más información</p>
                </div>
                </Link>
              </div>
            </div>
          </div>
       
          ))}

    </div>
  
  </div>


   
  );
};

export default Servicios;
