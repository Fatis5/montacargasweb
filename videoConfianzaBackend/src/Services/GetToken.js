const axios = require('axios');

const get_token = async () => {
  const tokenEndpoint = 'https://developers.syscom.mx/oauth/token';
  const requestBody = {
    client_id: 'gVvJGyBdNvBTDL6ES4CpBZUcmp0IRe9c',
    client_secret: 'xjps2wSNFJqW5j9K50yJUJVFa6rzpCO00vJ8T1b9',
    grant_type: 'client_credentials'
  };
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.post(tokenEndpoint, requestBody, axiosConfig);
    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.error('Error al obtener el token:', error.message);
    throw error;
  }
};

module.exports = get_token;
