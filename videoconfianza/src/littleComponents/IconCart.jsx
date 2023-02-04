import React from "react";
import { BsCart4 } from "react-icons/bs";

const IconCart = () => {
  return (
    <div className="animate__animated animate__fadeInUp flex h-1/3 mr-5 mt-5">
      <div className="bg-yellow-300  rounded-xl">
        <div className="bg-red-500 w-1/2 rounded-xl    ">
          <p className="text-slate-300 md:text-2xl text-sm font-bold text-center ">0</p>
        </div>
        <BsCart4 className="text-black md:text-7xl text-4xl -mt-3 mx-auto" />
      </div>
    </div>
  );
};

export default IconCart;
