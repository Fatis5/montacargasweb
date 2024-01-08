import axios from "axios";
import { ContextCredentials } from "../ContextCredentials";


const getProductos = async (Palabra, setProductos, setPalabra) => {

  const config = {
    params: {
      busqueda: Palabra.replace(/ /g, "+"),
      orden: "relevancia",
    },
  };

  try {
    setProductos([]);
    const response = await axios.get("https://videoconfianzabackend-production.up.railway.app/", config);
    setProductos(response.data.productos);
    console.log(response.data.productos);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
  }
};



export default getProductos;