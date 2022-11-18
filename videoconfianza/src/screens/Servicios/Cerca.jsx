import React from 'react'
import full from "../../media/full.jpg";
import vc from "../../media/vc.jpeg";
import camera2 from "../../media/camera2.jpg";
import Buttons from "../Buttons";
import camras from "../../media/camras.jpg";
import precio from "../../media/precio.jpg";
import test3 from "../../media/test3.jpg";
import { TbDeviceCctv } from "react-icons/tb";
import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {RiRemoteControlLine} from "react-icons/ri";
import opencv from "../../media/opencv.jpg";
import ia3 from "../../media/ia3.png";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import cerca2 from "../../media/cerca2.jpg";
import {GiElectric} from "react-icons/gi"

const Cerca = () => {
  return (
    <div
    className="bg-fixed hover:bg-fixed"
    style={{
      backgroundImage: `url(${cerca2})`,
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
          Instalación de Cercas Electrificadas
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
            Aumenta la seguridad de tu propiedad.
          </h1>
        </div>
        <p className="my-5 text-white text-4sm  text-justify font-mono">
            Las cercas electrificadas son una excelente opción para proteger tu
            propiedad, ya que son una barrera física que impide el acceso a
            personas no autorizadas. Además, cuentan con un sistema de alarma que
            te alerta cuando alguien intenta entrar a tu propiedad.
        </p>
        <img
          className="rounded-xl md:w-1/2 mx-auto my-10"
          src={cerca2}
          alt=""
        />
        <div className="mx-auto my-5">
          <Buttons />
        </div>
      </div>
    </div>

    <div className="flex md:flex-row flex-col my-20">
      <div className="bg-blue-600 md:w-1/2">
        <GiElectric className="text-black text-7xl mx-10" />
        <br />
        <h1 className="font-bold txt-3xl text-white mx-10">
          Descansa mientras la cerca trabaja.
        </h1>
        <p className="text-white mx-10">
            LAs cercas electrificadas son una excelente opción para proteger tu propiedad, ya que están encendidas 24/7 los 365 días del año.
        </p>
        <h1 

            className="font-bold text-4xl text-white mx-10 mb-10"  
        >
            <br />
            Desde $150 MXN
        </h1>
      </div>
    </div>


    <div className="flex mx-auto my-5 justify-center">
      <Buttons />
    </div>
    <Footer />
    <Derechos />
  </div>
  )
}

export default Cerca