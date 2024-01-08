import React from "react";
import Search from "../littleComponents/Search";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Tienda = () => {
  const { Palabra, setPalabra } = useContext(ContextCredentials);
  const [Productos, setProductos] = useState([]);
  const navigate = useNavigate();


  const getProductos = async () => {
    const config = {
      params: {
        busqueda: Palabra.replace(/ /g, "+"),
        orden: "relevancia",
      },
    };

    try {
      const response = await axios.get(
        "https://videoconfianzabackend-production.up.railway.app/",
        config
      );
      setProductos(response.data.productos);
      console.log(response.data.productos)
    } catch (error) {
      console.error("Error al obtener productos:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProductos();
    };

    fetchData();
  }, [Palabra]);

  return (
    <div>
      <Search
      onclick={
        ()=>{
          navigate(`/ProductosBuscados/${Palabra.replace(/ /g, "+")}`);


        }
      }
      />
    </div>
  );
};

export default Tienda;
