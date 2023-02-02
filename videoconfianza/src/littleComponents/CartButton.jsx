import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  return (
    <div className="flex flex-row mt-5 justify-center w-full mb-3">
      <input
        className="w-1/5 h-11/12 mr-5 border-2 border-gray-300 bg-white h-10 px-5  rounded-lg text-sm focus:outline-none"
        type="number"
      />

      <div className=" px-5 w-auto bg-yellow-400 align-middle h-11/12 rounded-md flex items-center justify-center">
        <button className="flex flex-row ">
            <AiOutlineShoppingCart className="text-white my-auto text-xl" />
            <p className="text-white">Agregar</p>
        </button>
      </div>
    </div>
  );
};

export default CartButton;
