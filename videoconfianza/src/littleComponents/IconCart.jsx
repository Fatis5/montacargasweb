import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { Link } from "react-router-dom";

const IconCart = () => {
  const { Cart, setCart } = useContext(ContextCredentials);
  return (
    <Link 
    to={"/carrito"}
    className="animate__animated animate__fadeInUp flex h-1/3 mr-5 mt-5">
      <div className="bg-yellow-300  rounded-xl">
        <div className="bg-red-500 w-1/2 rounded-xl    ">
          <p className="text-slate-300 md:text-2xl text-sm font-bold text-center ">{
            Cart.map((item) => item.cantidad).reduce((a, b) => a + b, 0)
          }</p>
        </div>
        <BsCart4 className="text-black md:text-7xl text-4xl -mt-3 mx-auto" />
      </div>
    </Link>
  );
};

export default IconCart;
