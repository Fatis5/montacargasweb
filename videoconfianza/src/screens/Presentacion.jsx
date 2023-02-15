import React from "react";
import { useInView } from "react-intersection-observer";
import test4 from "../media/test4.jpg";

const Presentacion = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-100px 0px 0px 0px",
  });
  return (
    <div className=" h-max bg-gray-900 rounded-xl flex flex-col md:flex-row mx-10 animate__animated animate__pulse">
      <h1
        className=" text-gray-50 md:text-3xl  text-xl text-justify md:my-auto my-5  mx-8"
      >
        Empresa 100% mexicana dedicada a la instalación y venta de sistemas de
        seguridad electrónica, redes y alarmas  con los mejores ingenieros del país.
      </h1>

      <img className="rounded-2xl h-10/12 mx-auto" src={test4} />
    </div>
  );
};

export default Presentacion;
