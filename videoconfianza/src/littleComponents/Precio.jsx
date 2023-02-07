import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextCredentials } from "../ContextCredentials";
import axios from "axios";
import getToken from "../methods/GetToken";

const Precio = ({ precio }) => {
  const { Token, setToken, TipoCambio, setTipoCambio } =
    useContext(ContextCredentials);

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
    <h1 className="text-center text-3xl text-orange-500 font-bold my-3 animate__animated animate__fadeInUp">
      MX $
      {(precio * TipoCambio +precio * TipoCambio * 0.514
      
    )
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
    </h1>
  );
};

export default Precio;
