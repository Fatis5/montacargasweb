import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import getToken from '../methods/getToken'
import Loading from '../loading/Loading'
import { ContextCredentials } from '../ContextCredentials'

const DetalleProducto = () => {
  const { Token, setToken } = useContext(ContextCredentials);
  const [Producto, setProducto] = useState([])
  const {producto_ID} = useParams()
  const [ID, setID] = useState(
    parseInt(producto_ID)
  )

  const getProducto=async()=>{
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
    setProducto(response.data.productos);
    
    
  }

  useEffect(() => {
    getToken(setToken)
  }, [])
  
  useEffect(() => {
    getProducto()
  }, [Token])


  return (
    <div>
      <h1>
        Detalle del producto {producto_ID}
      </h1>
    </div>
  )
}

export default DetalleProducto