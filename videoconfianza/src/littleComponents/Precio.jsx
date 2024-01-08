import React from "react";
import { useState, useEffect, useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";



const Precio = ({ precio }) => {
  const { Cambio } = useContext(ContextCredentials);
  


  return (
    <h1 className="text-center text-3xl text-orange-500 font-bold my-3 animate__animated animate__fadeInUp">
      MX $
      {(precio * Cambio +precio * Cambio * 0.514
      
    )
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
    </h1>
  );
};

export default Precio;
