import React from "react";
import Contacto from "./screens/Contacto";
import Inicio from "./screens/Inicio";
import Servicios from "./screens/Servicios";
import Nosotros from "./screens/Nosotros";
import Cctv from "./screens/Servicios/Cctv";
import Acces from "./screens/Servicios/Acces";
import Vecinos from "./screens/Servicios/Vecinos";
import Industrial from "./screens/Servicios/Industrial";
import Pventa from "./screens/Servicios/Pventa";
import Enlaces from "./screens/Servicios/Enlaces";
import Hardwere from "./screens/Servicios/Hardwere";
import Paginasweb from "./screens/Servicios/Paginasweb";
import Opiniones from "./screens/Opiniones";
import Cerca from "./screens/Servicios/Cerca";
import Wifi from "./screens/Servicios/Wifi";
import { Route, Routes } from "react-router-dom";
import Navbar2 from "./screens/Navbar2";
import Tienda from "./Tienda/Tienda";
import Subcategorias from "./Tienda/Subcategorias";
import Productos from "./Tienda/Productos";
import { ContextCredentials } from "./ContextCredentials";
import { useState, useEffect } from "react";
import getToken from "./methods/GetToken";
import getTipoCambio from "./methods/TipoCambio";
import DetalleProducto from "./Tienda/DetalleProducto";
import Search from "./littleComponents/Search";
import Carrito from "./Tienda/Carrito";

const App = () => {
  const [Token, setToken] = useState("");
  const [TipoCambio, setTipoCambio] = useState("");
  const [Cart, setCart] = useState([])

  useEffect(() => {
    getToken(setToken);
  }, []);

  return (
    <ContextCredentials.Provider
      value={{
        Token,
        setToken,
        TipoCambio,
        setTipoCambio,
        Cart,
        setCart
      }}
    >
      <div >
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cctv" element={<Cctv />} />
          <Route path="/acces" element={<Acces />} />
          <Route path="/vecinos" element={<Vecinos />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/pventa" element={<Pventa />} />
          <Route path="/enlaces" element={<Enlaces />} />
          <Route path="/hardwere" element={<Hardwere />} />
          <Route path="/paginasweb" element={<Paginasweb />} />
          <Route path="/wifi" element={<Wifi />} />
          <Route path="/Testimonios" element={<Opiniones />} />
          <Route path="/cerca" element={<Cerca />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/subcategorias" element={<Subcategorias />} />
          <Route path="/search" element={<Search />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route
            path="/DetalleProducto/:producto_ID"
            element={<DetalleProducto />}
          />
        </Routes>
      </div>
    </ContextCredentials.Provider>
  );
};

export default App;
