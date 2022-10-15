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
import Wifi from "./screens/Servicios/Wifi";

import { Route, Routes } from "react-router-dom";
import Navbar2 from "./screens/Navbar2";

const App = () => {
  return (
    <div>
      <Navbar2 

      />


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
      </Routes>


      
    </div>
  );
};

export default App;
