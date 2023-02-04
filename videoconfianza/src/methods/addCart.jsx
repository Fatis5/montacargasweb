import React from "react";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { useState } from "react";

const AddCart = (id, modelo, precio, imagen, cantidad) => {
  const { Cart, setCart } = useContext(ContextCredentials);
  return( setCart([
    ...Cart,
    {
      id: id,
      modelo: modelo,
      precio: precio,
      imagen: imagen,
      cantidad: cantidad,
      titulo: titulo,
      marca: marca,
    },
  ]))
};

export default AddCart;



