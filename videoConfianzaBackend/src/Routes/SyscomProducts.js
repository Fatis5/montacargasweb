const Router = require("express").Router();
const Productos = require("../Controllers/GetProducts");


Router.get("/", Productos.getProductos);

module.exports = Router;