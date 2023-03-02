import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { Link, useLocation, useParams } from "react-router-dom";
import getToken from "../methods/getToken";
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
  const { Token, setToken, TipoCambio, setTipoCambio } =
    useContext(ContextCredentials);
  const [Nombre, setNombre] = useState(producto_Nombre);
  const [Imagen, setImagen] = useState([]);

  const [ProductosAutorizados, setProductosAutorizados] = useState([]);

  const getProductos = async () => {
    //Get productos with paramas with axios and Bearer Token from https://developers.syscom.mx/api/v1/productos.

    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },

      params: {
        busqueda: producto_Nombre,
    
      },
    };

    const response = await axios.get(
      "https://developers.syscom.mx/api/v1/productos",
      config
    );
    console.log(response.data);
    setProductos(response.data.productos);
    setProductosAutorizados(
      Productos.filter((producto) => producto.nota !== "SOLICITAR DISTRIBUCIÓN")
    );
  };

  const getTipoCambio = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },
    };

    const response = await axios.get(
      "https://developers.syscom.mx/api/v1/tipocambio",
      config
    );
    console.log(response.data);
    setTipoCambio(
      //convert to float the data from the API
      parseFloat(response.data.normal)
      //response.data
    );
  };

  useEffect(() => {
    getToken(setToken);

  }, []);

  useEffect(() => {
    getTipoCambio();
   
  }, [Token]);

  useEffect(() => {
    setProductos([]);
    getProductos();
  }, [producto_Nombre]);

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
                ${(producto.precios.precio_lista * TipoCambio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </h1>

              {/*        <h1 className="text-center text-3xl text-orange-500 font-bold my-3 animate__animated animate__fadeInUp">
                MX $
                {(
                  producto.precios.precio_descuento * TipoCambio +
                  producto.precios.precio_descuento * TipoCambio * 0.36
                )
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </h1> */}
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
