import axios from "axios";




const getToken = async (setToken) => {
    //get token with axios and application/x-www-form-urlencoded from https://developers.syscom.mx/oauth/token.

    const data = {
      client_id: "gVvJGyBdNvBTDL6ES4CpBZUcmp0IRe9c",
      client_secret: "xjps2wSNFJqW5j9K50yJUJVFa6rzpCO00vJ8T1b9",
      grant_type: "client_credentials",
    };
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const response = await axios.post(
      "https://developers.syscom.mx/oauth/token",
      data,
      config
    );
    setToken(response.data.access_token);
    //console.log(response.data.access_token);
  };

  export default getToken;
