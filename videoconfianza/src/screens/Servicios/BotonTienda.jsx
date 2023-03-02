import React from "react";

import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const BotonTienda = () => {
  return (
    <Link
      to="/tienda"
      className="
    flex flex-row justify-center items-center
    bg-gradient-to-r from-red-600 to-red-700
    md:w-1/3 
    w-11/12
    mx-auto my-10
    rounded-lg
    animate__animated animate__pulse animate__infinite	infinite

    
    "
    >
      <p className="text-white text-center font-bold  text-3xl animate__animated animate__zoomInDown">
        Visita Nuestra Tienda
      </p>

      <MdOutlineNavigateNext
        alt="Tienda Videoconfianza"
        className="text-5xl text-white animate__animated animate__bounce"
      />
    </Link>
  );
};

export default BotonTienda;
