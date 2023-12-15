const getToken = require('../Services/GetToken');
const axios = require('axios');

const Productos = {};

Productos.getProductos = async (req, res) => {
  try {
    const token = await getToken();

    // Parámetros personalizables
    const params = req.query; // Utiliza los parámetros proporcionados en la solicitud

    // Ahora puedes usar el token para hacer la solicitud a la API de productos
    const apiUrl = 'https://developers.syscom.mx/api/v1/productos';
    const axiosConfig = {
      headers: {
        'Authorization': 'Bearer ' + token
      },
      params: params
    };

    const response = await axios.get(apiUrl, axiosConfig);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = Productos;
