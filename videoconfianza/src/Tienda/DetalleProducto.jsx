import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getToken from "../methods/getToken";
import Loading from "../littleComponents/Loading";
import { ContextCredentials } from "../ContextCredentials";
import Iva from "../littleComponents/Iva";
import CartButton from "../littleComponents/CartButton";
import IconCart from "../littleComponents/IconCart";


const DetalleProducto = () => {
  const { Token, setToken, setTipoCambio, TipoCambio } =
    useContext(ContextCredentials);
  const [Producto, setProducto] = useState([]);
  const { producto_ID } = useParams();
  const [ID, setID] = useState(parseInt(producto_ID));

  const getProducto = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },

      params: {
        id: ID,
      },
    };

    const response = await axios.get(
      "https://developers.syscom.mx/api/v1/productos/{id}",
      config
    );
    console.log(response.data);
    setProducto(response.data);
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
    getProducto();
    getTipoCambio();
  }, [Token]);

  return (
    <div>
     <div className="m-10 animate__animated animate__fadeInUp absolute md:right-0 -right-10 top-4">
          <IconCart />
        </div>
      {Producto.length === 0 && <Loading />}
      {Producto.length !== 0 && (
        <div className="flex   md:flex-row flex-col">
          <div className="md:w-1/2 full flex-col flex justify-center items-center">
            <img src={Producto.img_portada} alt="" />
            <img className="w-1/3 mx-auto" src={Producto.marca_logo} alt="" />
          </div>
          <div className="md:w-1/3 mt-10">
            <h1 className="text-xl text-justify md:mx-0 mx-10">
              {Producto.titulo}
            </h1>
            <div className="flex flex-col">
              <div>
                <div className="flex flex-row  mt-2 md:mt-2 mx-10">
                  <p className="text-justify mx-1 ">Modelo:</p>
                  <p className="text-justify md:mx-0 mx-1 font-bold text-blue-500 uppercase ">
                    {Producto.modelo}
                  </p>
                </div>
                <div className="flex flex-row  mt-2 md:mt-0 mx-10">
                  <p className="text-justify mx-1 ">Marca:</p>
                  <p className="text-justify md:mx-0 mx-1 font-bold text-blue-500 uppercase ">
                    {Producto.marca}
                  </p>
                </div>
                <div className="flex flex-row  mt-2 md:mt-0 mx-10">
                  <p className="text-justify mx-1 ">Existencia:</p>
                  <p className="text-justify md:mx-0 mx-1 font-bold text-blue-500 uppercase ">
                    {Producto.total_existencia}
                  </p>
                </div>
              </div>
              
                <a  
                className="text-blue-500   text-xl mt-5 underline mx-10 "
                href={Producto.link_privado}>
                  ver mas  {" >"}
                </a>
              
            </div>
            <p className="text-center text-sm text-slate-800  m-1 animate__animated animate__fadeInUp ">
              Precio Anterior:
            </p>
            <h1 className="text-center text-sm text-slate-400  m-1 animate__animated animate__fadeInUp line-through">
              ${(Producto.precios.precio_lista * TipoCambio).toFixed(2)}
            </h1>
            <p className="text-center text-2xl text-slate-900 mt-3 m-1 animate__animated animate__fadeInUp ">
              Precio Actual:
            </p>

            <div className="flex flex-row justify-center mx-auto">
              {" "}
              <h1 className="text-center text-4xl text-orange-500 font-bold  animate__animated animate__fadeInUp italic">
                MX $
                {(
                  Producto.precios.precio_descuento * TipoCambio +
                  Producto.precios.precio_descuento * TipoCambio * 0.36
                ).toFixed(2)}
              </h1>
              <Iva />
            </div>
          <CartButton/> 
          </div>
        </div>
      )}

    </div>
  );
};

export default DetalleProducto;
