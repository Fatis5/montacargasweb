import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import vc from "../media/vc.jpeg";

const Navbar2 = () => {
  return (
    <div className="fixed top-0 left-0 right-0 absolute relative">
      <Navbar fluid={true} rounded={true}>

          <Link to="/">
<div className="flex flex-row">
<img src={vc} className="mr-3 h-6 sm:h-9" alt="VC Logo" />
          <span
            className="self-center whitespace-nowrap text-5xl  dark:text-white"
            style={{ fontFamily: "Harlekin" }}
          >
            Video confianza
          </span>
</div>
          </Link>

      
        <Navbar.Toggle />
        <Navbar.Collapse>

     
            <Link to="/">Inicio</Link>
   

    
            <Link to="/contacto">Contacto</Link>
      

     
            <Link to="/servicios">Servicios</Link>


        

  
            <Link to="/nosotros">Nosotros</Link>
     

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;
