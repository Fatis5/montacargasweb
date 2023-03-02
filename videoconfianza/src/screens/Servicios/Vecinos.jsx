import React from 'react'

import Buttons from "../Buttons";
import camras from "../../media/camras.jpg";

import Footer from "../Footer";
import Derechos from "../Derechos";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {RiRemoteControlLine} from "react-icons/ri";

import AlarmasVecinales from "../../media/AlarmasVecinales.jpg";

const Vecinos = () => {
  return (
    <div
    className="bg-fixed hover:bg-fixed"
    style={{
      backgroundImage: `url(${AlarmasVecinales})`,
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
          Instalación de Alarmas Vecinales.
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
            Aumenta la seguridad de tu cerrada o vecindario.
          </h1>
        </div>
        <p className="my-5 text-white text-4sm  text-justify font-mono">
          En estos tiempos lo mas importante es ser un vecino unido para poder combatir la inseguridad, por eso te ofrecemos la instalación de alarmas vecinales, con las cuales podrás estar al tanto de lo que sucede en tu vecindario, y si es necesario poder comunicarte con los vecinos para poder combatir la inseguridad.
        </p>
        <img
          className="rounded-xl md:w-1/2 mx-auto my-10"
          src={AlarmasVecinales}
          alt=""
        />
        <div className="mx-auto my-5">
          <Buttons />
        </div>
      </div>
    </div>

    <div className="flex md:flex-row flex-col my-20">
      <div className="bg-blue-600 md:w-1/2">
        <RiRemoteControlLine className="text-black text-7xl mx-10" />
        <br />
        <h1 className="font-bold txt-3xl text-white mx-10">
          Desde un control.
        </h1>
        <p className="text-white mx-10">
          Podrás controlar tu alarma vecinal desde un control remoto, el cual te permitirá saber si hay algún intruso en tu vecindario.
        </p>
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

export default Vecinos