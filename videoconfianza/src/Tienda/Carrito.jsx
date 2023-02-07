import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import _ from "lodash";
import CartButton from "../littleComponents/CartButton";
import Precio from "../littleComponents/Precio";
import getToken from "../methods/getToken";
import axios from "axios";

const Carrito = () => {
  const { Cart, setCart } = useContext(ContextCredentials);
  const { Token, setToken, TipoCambio, setTipoCambio } =
    useContext(ContextCredentials);
  const [Carro2, setCarro2] = useState(
    Cart.filter((item) => item.cantidad > 0)
  );

  useEffect(() => {
    setCarro2(Cart.filter((item) => item.cantidad > 0));
  }, [Cart]);

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


  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-700 mt-4 mb-4">
        Carrito de compras
      </h1>
      <div className="flex flex-col  w-4/5 mx-auto  bg-yellow-200 rounded-xl">
        <h1 className="text-center md:text-3xl text-xl font-bold text-red-500 mt-4">
          ¡Atención!
        </h1>
        <div className="flex flex-row  justify-center">
          <AiOutlineWhatsApp className="md:text-3xl text-7xl text-green-500 md:mt-0 -mt-4" />
          <p className="text-center text-sm font-bold text-gray-700 mt-1 mb-4 ">
            Para atención mas personalizada tu pedido será enviado al número de
            <span className="text-black"> WhatsApp</span> de un asesor de
            ventas.{" "}
          </p>
        </div>
      </div>

      {Carro2.length === 0 && (
        <div className="flex flex-col justify-center">
          <p className="text-center text-sm font-bold text-gray-700 mt-5 mb-1 ">
            No hay productos en el carrito
          </p>
          <Link
            className="text-center text-sm font-bold text-gray-700  mb-4 underline"
            to="/tienda"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto">
              Ir a la tienda
            </button>
          </Link>
        </div>
      )}

      {Carro2.length > 0 && (
        <div className="overflow-y-auto h-80 w-11/12 mx-auto">
          <table className="overflow-x-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  Imagen
                </th>
                <th scope="col" className="px-6 py-3">
                  Producto
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Modelo
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg mx-auto">
                  Precio unitario
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg w-1/10">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {Carro2.map((item) => (
                <tr key={item.id} className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={item.img}
                      alt={item.modelo}
                    />
                  </td>
                  <td className="px-6 py-4 w-1/4">{item.titulo}</td>
                  <td className="px-6 py-4">{item.modelo}</td>
                  <td className="px-6 py-4">
                    <Precio
                      className="text-center text-sm font-bold text-gray-700 mt-5 mb-1"
                      precio={item.precio}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <CartButton
                      id={item.id}
                      modelo={item.modelo}
                      precio={item.modelo}
                      img={item.img}
                      titulo={item.titulo}
                      marca={item.marca}
                      cantidad={item.cantidad}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Precio
                      className="text-center text-sm font-bold text-gray-700 mt-5 mb-1"
                      precio={item.precio * item.cantidad}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {Carro2.length > 0 && (
        <div>
          <div className="flex flex-col w-4/5 mx-auto">
            <div className="flex flex-row justify-end">
              <p className="text-center text-xl  font-bold text-gray-700 mt-5 mb-1 ">
                Total:{" "}
                <Precio
                  className="text-center text-xl  font-bold text-gray-700 mt-5 mb-1 "
                  precio={Carro2.reduce(
                    (acumulador, item) =>
                      acumulador + item.precio * item.cantidad,
                    0
                  )}
                />
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 md:mx-auto  flex flex-row justify-center  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full  md:w-1/3">
              <a
                classNameName="text-center text-sm font-bold text-gray-700 mt-1 mb-4 underline"
                //send cart to whatsapp
                href={`https://wa.me/+525522815315?text=Hola,%20me%20gustaría%20realizar%20el%20siguiente%20pedido:%20${Carro2.map(
                  (item) => `%20*${item.cantidad}%20=>%20${item.modelo}*%20%20`
                )}%20Total:%20${_.sumBy(
                  Carro2,
                  (item) => item.precio * item.cantidad*TipoCambio +item.precio * item.cantidad*TipoCambio * 0.514
                ).toFixed(2)}`}
                target="_blank"
                rel="noreferrer"
              >
                Enviar pedido por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
