import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import axios from "axios";
import Loading from "../loading/Loading";
import getToken from "../methods/getToken";

const Subcategorias = () => {
  const location = useLocation();
  const [ID, setID] = useState(location.state.id);
  const [Subcategorias, setSubcategorias] = useState("");
  const { Token, setToken } = useContext(ContextCredentials);

  //get categorias by id
  const getSubcategorias = async () => {
    const config = {
      headers: {
        Authorization: "Bearer " + Token,
      },
    };
    const response = await axios.get(
      "https://developers.syscom.mx/api/v1/categorias/" + ID,
      config
    );
    console.log(response.data);
    setSubcategorias(response.data);
  };

  useEffect(() => {
    getToken(setToken);
  }, []);

  useEffect(() => {
    getSubcategorias();
  }, [Token]);

  return (
    <div className="bg-blue-500">
      <h1 className="text-center text-5xl text-white font-bold m-5 animate__animated animate__fadeInUp">
        ¿Qué vas a ocupar en {Subcategorias.nombre}?
      </h1>

      <div
      className="flex flex-wrap justify-center items-center"
      >

      {Subcategorias !== "" && (
        <div   className="flex flex-wrap align-middle justify-center">
          {Subcategorias.subcategorias.map((subcategoria) => {
            return (
              <div className="bg-white w-1/3 m-10 justify-center rounded-md h-1/3">
                <Link
                  to="/productos"
                  state={{
                    nombre: subcategoria.nombre,
                  }}
                  key={Subcategorias.id}
                >
                  <h2
                  
                  className="text-center text-2xl text-black font-bold m-5"
                  >{subcategoria.nombre}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      </div>


    </div>
  );
};

export default Subcategorias;
