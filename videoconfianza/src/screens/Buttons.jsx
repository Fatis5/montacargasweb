import React from 'react'
import { useNavigate } from "react-router-dom";

const Buttons = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate("/contacto")}
        className="bg-white text-3xl rounded-md w-80 text-black border-light border-4 border-green-700 hover:bg-gray-100 
        animate__animated animate__pulse animate__infinite
        ">Cotizar un Servicio</button>
      
    </div>
  )
}

export default Buttons
