import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Loading from "../loading/Loading";
import Footer from "../screens/Footer";
import { ContextCredentials } from "../ContextCredentials";
import {Link, useLocation, Navigate} from "react-router-dom";


const Tienda = () => {
  const { Token, setToken } = useContext(ContextCredentials);
  const [Categorias, setCategorias] = useState([]);

  const getCategorias = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },
    };
    const response = await axios.get(
      "https://developers.syscom.mx/api/v1/categorias",
      config
    );
    console.log(response.data);
    setCategorias(response.data);
  };


  useEffect(() => {
    getCategorias();
  }, [Token]);

  return (
    <div className=" flex flex-col justify-center align-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h1 className="text-center text-5xl text-white font-bold m-5 animate__animated animate__fadeInUp">
        Video Confianza
      </h1>
      <h1 className="text-center text-5xl text-white font-bold m-1 animate__animated animate__fadeInUp">
        Tienda Oficial
      </h1>

      <h2 className="text-center text-3xl text-white font-bold m-1 animate__animated animate__fadeInUp">
        ¿Qué necesitas hoy?
      </h2>
      {Categorias.length === 0 && (
        <div className="mx-auto flex justify-center my-auto align-middle w-full h-1/2">
          <Loading />
        </div>
      )}
      {Categorias.length > 0 &&
        Categorias.map((categoria) => (
          <Link
            to="/subcategorias"
            state={{
              id: categoria.id,
            }}
            className="flex flex-wrap m-1 animate__fadeInUp animate__animated"
            key={categoria.id}
          >
            <div className="  flex md:w-1/3 w-11/12 bg-blue-600 mt-10 justify-center mx-auto shadow-md rounded-md ">
              <h1 className=" text-center text-2xl text-white font-bold m-5">
                {categoria.nombre}
              </h1>
            </div>
          </Link>
        ))}

      <Footer />
    </div>
  );
};

export default Tienda;
