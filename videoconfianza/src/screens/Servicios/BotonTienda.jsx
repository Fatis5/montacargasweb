import React from "react";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

const BotonTienda = () => {
  return (
    <Link to="/tienda" className="
    flex flex-row justify-center items-center
    bg-gradient-to-r from-red-600 to-red-700
    md:w-1/3 
    w-11/12
    mx-auto my-10
    rounded-lg
    animate__animated animate__pulse animate__infinite	infinite

    
    ">
        <h1
        className="text-white text-center font-bold  text-3xl animate__animated animate__zoomInDown"
        >Visita Nuestra Tienda</h1>
        
            <MdOutlineNavigateNext className="text-5xl text-white animate__animated animate__bounce" />
     

   

     

            </Link>
  );
};

export default BotonTienda;
