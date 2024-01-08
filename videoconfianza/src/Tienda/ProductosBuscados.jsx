import React from 'react'
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ContextCredentials } from '../ContextCredentials';
import { useEffect } from 'react';
import getProductos from '../Metodos/GetProductos';
import Loading from '../littleComponents/Loading';
import IconCart from '../littleComponents/IconCart';
import Search from '../littleComponents/Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Iva from '../littleComponents/Iva';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const ProductosBuscados = () => {
  const { Palabra, setPalabra, setProductos, Productos,Cambio, setCambio} = useContext(ContextCredentials);
  const {producto_Nombre} = useParams();
  //const [Cambio, setCambio] = useState(" ")
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  useEffect(() => {
    getProductos(producto_Nombre, setProductos, setPalabra);

  }, [])


  

  return (
<div className="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className=" flex flex-row justify-center static">
      <h1 className="text-center text-5xl text-white font-bold m-5 animate__animated animate__fadeInUp">
       
       Resultados de {" "}
        {
      
        producto_Nombre.replace(/\+/g, " ")}
      </h1>

      <div className="m-10 animate__animated animate__fadeInUp absolute md:right-0 -right-10 top-4">
        <IconCart />
      </div>
    </div>
    <Search 
    onclick={
      ()=>{
        getProductos()
      }
    }
    
    />

    {
  
  Productos.length === 0 && Cambio !== " "

      ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap align-middle justify-center">
      {Productos.length === 0 && (
        <Loading className=" flex mx-auto justify-center align-middle h-1/3 " />
      )}

      {Productos.filter(
        (producto) => producto.nota !== "SOLICITAR DISTRIBUCIÓN"
      ).map((producto) => {
        return (
          <div
            key={producto.producto_id}
            className=" max-w-xs  mx-10 my-4  overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800 flex flex-col justify-center items-center"
          >
            <img
              className="w-1/2 mx-auto animate__animated animate__fadeInUp"
              src={producto.img_portada}
              alt="imagen"
            />
            <Link
              to={{
                pathname: `/DetalleProducto/${producto.producto_id}`,
              }}
              className="text-center text-base text-black font-bold m-1 hover:text-blue-600 hover:underline  animate__animated animate__fadeInUp"
            >
              {producto.titulo}
            </Link>
            <h1 className="text-center text-xl text-green-700  m-1 animate__animated animate__fadeInUp">
              {producto.marca}
            </h1>
            <h1 className="text-center text-xl text-slate-400  m-1 animate__animated animate__fadeInUp line-through">
              ${(producto.precios.precio_lista * 20).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </h1>


            <h1 className="text-center text-3xl text-orange-500 font-bold my-3 animate__animated animate__fadeInUp">
      MX $
      {(producto.precios.precio_descuento * Cambio +producto.precios.precio_descuento * Cambio * 0.514
      
    )
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
    </h1>
            <Iva className="animate__animated animate__fadeInUp" /> 

  
          </div>
        );
      })}
    </div>
      )
    }

    
  </div>

  )
}

export default ProductosBuscados