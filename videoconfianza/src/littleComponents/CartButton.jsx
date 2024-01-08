import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";


const CartButton = ({ id, modelo, precio, img, cantidad, titulo, marca }) => {
  const { Cart, setCart } = useContext(ContextCredentials);
  const [Cantidad, setCantidad] = useState(
    Cart.find((item) => item.id === id)
      ? Cart.find((item) => item.id === id).cantidad
      : 0
  );

  const AddCart = (id, modelo, precio, imagen, cantidad, titulo, marca) => {
    const producto = {
      id,
      modelo,
      precio,
      img,
      cantidad: Cantidad + 1,
      titulo,
      marca,
    };

    if (Cart.length === 0) {
      setCart([...Cart, producto]);
    } else {
      const existe = Cart.find((item) => item.id === id);

      if (existe) {
        const newCart = Cart.map((item) =>
          item.id === id ? { ...existe, cantidad: Cantidad + 1 } : item
        );
        setCart(newCart);
      } else {
        setCart([...Cart, producto]);
      }
    }
    //console.log(Cart);
  };

 //function to remove products from cart when press - button with lodash
  const RemoveCart = (id, modelo, precio, img, cantidad, titulo, marca) => {
    const producto = {
      id,
      modelo,
      precio,
      img,
      cantidad: Cantidad - 1,
      titulo,
      marca,
    };

    if (Cart.length === 0) {
      setCart([...Cart, producto]);
    } else {
      const existe = Cart.find((item) => item.id === id);

      if (existe) {
        const newCart = Cart.map((item) =>
          item.id === id ? { ...existe, cantidad: Cantidad - 1 } : item
        );
        setCart(newCart);
      } else {
        setCart([...Cart, producto]);
      }
    }
    console.log(Cart);
  };



  return (
    <div className="flex flex-row mt-5 justify-center w-full mb-3 px-3">
      <div className=" px-5 w-auto bg-red-500 align-middle h-11/12 rounded-md flex items-center justify-center">
        <button
        disabled={Cantidad === 0 ? true : false}
          onClick={() => {
            setCantidad(Cantidad - 1);
            RemoveCart(id, modelo, precio, img, cantidad, titulo, marca);
          }}
          className="flex flex-row "
        >
          {/* <AiOutlineShoppingCart className="text-white my-auto text-xl" /> */}
          <p className="text-white text-3xl">-</p>
        </button>
      </div>
      <p
        className="
        w-10 h-11/12 bg-white text-center text-xl font-bold

      
      "
      >
        {Cart.find((item) => item.id === id)
          ? Cart.find((item) => item.id === id).cantidad
          : 0}
      </p>

      <div className=" px-5 w-auto bg-yellow-400 align-middle h-11/12 rounded-md flex items-center justify-center">
        <button
          onClick={() => {
            setCantidad(Cantidad + 1);
            AddCart(id, modelo, precio, img, cantidad, titulo, marca);
          }}
          className="flex flex-row "
        >
          {/*   <AiOutlineShoppingCart className="text-white my-auto text-xl" /> */}
          <p className="text-white text-3xl">+</p>
        </button>
      </div>
    </div>
  );
};

export default CartButton;
