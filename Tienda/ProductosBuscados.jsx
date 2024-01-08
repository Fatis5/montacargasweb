/* import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { Link, useLocation, useParams } from "react-router-dom";
import Loading from "../littleComponents/Loading";
import Search from "../littleComponents/Search";
import getTipoCambio from "../methods/TipoCambio";
import Iva from "../littleComponents/Iva";
import CartButton from "../littleComponents/CartButton";
import IconCart from "../littleComponents/IconCart";
import Precio from "../littleComponents/Precio";

const ProductosBuscados = () => {
  const { producto_Nombre } = useParams();
  const [Productos, setProductos] = useState([]);
  const { Palabra, setPalabra } = 
    useContext(ContextCredentials);
  const [Nombre, setNombre] = useState(producto_Nombre);
  const [Imagen, setImagen] = useState([]);

  const [ProductosAutorizados, setProductosAutorizados] = useState([]);

  const getProductos = async () => {
    const config = {

      params: {
        busqueda: producto_Nombre,
        orden: "relevancia",
      },
    };

    try {
      const response = await axios.get("https://videoconfianzabackend-production.up.railway.app/", config);
      setProductos(response.data.productos);
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      await getProductos();
    };

    fetchData();
  }, []);  

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
      <Search />

      {
        //If the API is loading, show the loading component
        
        //detect if productos change and if it is empty, show the loading component
        Productos.length === 0 

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

 
              <Precio precio={producto.precios.precio_descuento} />
              <Iva className="animate__animated animate__fadeInUp" />

              <div>
                <CartButton
                  id={producto.producto_id}
                  modelo={producto.modelo}
                  precio={producto.precios.precio_descuento}
                  img={producto.img_portada}
                  titulo={producto.titulo}
                  marca={producto.marca}
                  cantidad={0}
                />
              </div>
            </div>
          );
        })}
      </div>
        )
      }

      
    </div>
  );
};

export default ProductosBuscados;
 */

import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { Link, useLocation, useParams } from "react-router-dom";
import Loading from "../littleComponents/Loading";
import Search from "../littleComponents/Search";
import Iva from "../littleComponents/Iva";
import CartButton from "../littleComponents/CartButton";
import IconCart from "../littleComponents/IconCart";
import Precio from "../littleComponents/Precio";

const ProductosBuscados = () => {
  const { producto_Nombre } = useParams();
  const [Productos, setProductos] = useState([]);
  const { Palabra, setPalabra } = 
    useContext(ContextCredentials);
  const [Nombre, setNombre] = useState(producto_Nombre);
  const [Imagen, setImagen] = useState([]);

  const [ProductosAutorizados, setProductosAutorizados] = useState([]);

  const getProductos = async () => {
    const config = {

      params: {
        busqueda: producto_Nombre,
        orden: "relevancia",
      },
    };

    try {
      const response = await axios.get("https://videoconfianzabackend-production.up.railway.app/", config);
      setProductos(response.data.productos);
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      await getProductos();
    };

    fetchData();
  }, []); 
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
      //If the API is loading, show the loading component
      
      //detect if productos change and if it is empty, show the loading component
      Productos.length === 0 

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


            <Precio precio={producto.precios.precio_descuento} />
            <Iva className="animate__animated animate__fadeInUp" />

            <div>
              <CartButton
                id={producto.producto_id}
                modelo={producto.modelo}
                precio={producto.precios.precio_descuento}
                img={producto.img_portada}
                titulo={producto.titulo}
                marca={producto.marca}
                cantidad={0}
              />
            </div>
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