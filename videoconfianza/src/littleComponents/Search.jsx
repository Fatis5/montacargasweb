import React, { Component, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { useEffect } from "react";
import getToken from "../methods/getToken";
import Iva from "./Iva";
import { Link } from "react-router-dom";

const Search = () => {
  const { Token, setToken } = useContext(ContextCredentials);
  const [Palabra, setPalabra] = useState("");
  const [Productos, setProductos] = useState([]);
  const [TipoCambio, setTipoCambio] = useState("");
  const [ProductosAutorizados, setProductosAutorizados] = useState([]);

  const getProductos = async (Nombre) => {
    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },

      params: {
        busqueda: Nombre,
        
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

    if (Palabra === "") {
      setProductosAutorizados([]);
    }
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
    console.log("Token: " + Token);
  }, []);

  useEffect(() => {
    getTipoCambio();
  }, [Token]);

  return (
    <div className="mx-auto flex flex-col">
      <input
        onChange={(e) => {
          setPalabra(e.target.value);
          getProductos(Palabra);
        }}
        placeholder="Buscar producto escribiendo el modelo o nombre"
        className="mx-auto md:w-1/3 w-4/5 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
      />

      {ProductosAutorizados.length > 0 && Palabra !== "" && (
        <div className="overflow-y-auto h-80 md:w-1/3 w-4/5 mx-auto">
          {ProductosAutorizados.map((producto) => (
            <div className="px-3 bg-slate-50">
              <Link
                to={{
                  pathname: `/DetalleProducto/${producto.producto_id}`,
                }}
                key={producto.id}
                className="mx-auto justify-center flex flex-row bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition duration-300 "
              >
                <div className="mx-auto flex flex-col">
                  <img
                    className="mx-auto w-1/3"
                    src={producto.img_portada}
                    alt="imagen"
                  />
                  <img
                    className="mx-auto w-1/3"
                    src={producto.marca_logo}
                    alt="marca"
                  />
                </div>
                <div className="mx-auto flex flex-col ">
                  <p className="mx-auto text-sm font-bold">{producto.titulo}</p>
                  <h1 className="text-center md:text-2sm  text-orange-500 font-bold mt-3 animate__animated animate__fadeInUp">
                    MX $
                    {(
                      producto.precios.precio_descuento * TipoCambio +
                      producto.precios.precio_descuento * TipoCambio * 0.36
                    )
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </h1>
                  <Iva />
                </div>
              </Link>
              <hr className="border-black w-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
