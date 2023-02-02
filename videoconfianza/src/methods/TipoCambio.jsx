import axios from "axios";
import { useContext } from "react";
import getToken from "./GetToken";
import { useEffect } from "react";
import { ContextCredentials } from "../ContextCredentials";






const getTipoCambio = async (setTipoCambio) => {
    const { Token, setToken } = useContext(ContextCredentials);
    await getToken(setToken);
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


  export default getTipoCambio;