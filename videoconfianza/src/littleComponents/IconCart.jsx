import React from "react";
import { BsCart4 } from "react-icons/bs";

const IconCart = () => {
  return (
    <div className="bg-yellow-300 max-w-sm">
      <BsCart4 className="text-black md:text-7xl animate__animated animate__fadeInUp  mt-2" />
      <div  className="bg-red-500 w-8 rounded-xl  h-8 mx-12">
        <p className="text-slate-300 text-2xl font-bold text-center">0</p>
      </div>
    </div>
  );
};

export default IconCart;
