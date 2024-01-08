import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Importa Link de React Router
import Search from "../littleComponents/Search";
import Loading from "../littleComponents/Loading";
import { useLocation } from "react-router-dom";

const Categorias = () => {
  const [Categorias, setCategorias] = useState([]);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  

  useEffect(() => {
    axios
      .get("https://videoconfianzabackend-production.up.railway.app/categorias")
      .then((response) => {
        setCategorias(response.data);
      });
  }, []);

  const redirectToProductos = (categoriaNombre) => {
    // Aquí puedes redirigir a la página de productos con el nombre de la categoría como argumento
    // Asegúrate de tener configurado React Router en tu aplicación
    // y que la ruta de productos acepte un parámetro llamado "categoria"
    // Por ejemplo, podrías tener una ruta como "/productos/:categoria" en tu archivo de rutas
    // y pasas el nombre de la categoría como argumento en la URL
  };

  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full">
      {Categorias.length === 0 ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center justify-center text-center w-full h-full">
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              style={{
                fontFamily: "Harlekin",
              }}
              className="text-2xl text-white mb-2"
            >
              Video confianza
            </h2>
            <h1 className="text-3xl text-white font-bold mb-2">Tienda Oficial</h1>
            <h3 className="text-xl text-white font-sans font-bold mb-4">
              ¿Qué necesitas hoy?
            </h3>
          </div>
          <div className="flex items-center justify-center w-11/12 h-full">
            <Search />
          </div>
          <div className="flex flex-col items-center justify-center w-11/12  ">
            {Categorias.map((categoria) => (
              <Link
              to={`/ProductosBuscados/${encodeURIComponent(categoria.nombre)}`}
                key={categoria.id}
                className="bg-white md:w-1/2 w-full h-10 rounded-md flex justify-center items-center text-black font-bold m-2"
              >
                {categoria.nombre}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias;
