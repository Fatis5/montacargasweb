import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";


const CartButton = ({
  id,
  modelo,
  precio,
  imagen,
  cantidad,
  titulo,
  marca,
}) => {
  const { Cart, setCart } = useContext(ContextCredentials);
  const [Cantidad, setCantidad] = useState(0);

  const AddCart = (id, modelo, precio, imagen, cantidad, titulo, marca) => {
    const producto = {
      id,
      modelo,
      precio,
      imagen,
      cantidad,
      titulo,
      marca,
    };

    if (Cart.length === 0) {
      setCart([...Cart, producto]);
    } else {
      const existe = Cart.find((item) => item.id === id);

      if (existe) {
        const newCart = Cart.map((item) =>
          item.id === id ? { ...existe, cantidad: Cantidad } : item
        );
        setCart(newCart);
      } else {
        setCart([...Cart, producto]);
      }
    }
  };
  

  return (
    <div className="flex flex-row mt-5 justify-center w-full mb-3">
      <input
        onChange={(e) => setCantidad(e.target.value)}
        className="w-1/3 h-11/12 mr-5 border-2 border-gray-300 bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
        type="number"
        value={Cantidad}
      />

      <div className=" px-5 w-auto bg-yellow-400 align-middle h-11/12 rounded-md flex items-center justify-center">
        <button
          onClick={() => {
            AddCart(id, modelo, precio, imagen, cantidad, titulo, marca);
          }}
          className="flex flex-row "
        >
          <AiOutlineShoppingCart className="text-white my-auto text-xl" />
          <p className="text-white">Agregar</p>
        </button>
      </div>
    </div>
  );
};

export default CartButton;
