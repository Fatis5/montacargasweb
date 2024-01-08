import axios from "axios";
import { ContextCredentials } from "../ContextCredentials";

const getProductos = async (setCategorias) => {


  try {
    
    
    const response = await axios.get("https://videoconfianzabackend-production.up.railway.app/categorias");
   
    console.log(response.data);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
  }
};

export default getProductos;