import React, { useContext } from 'react';
import getProductos from '../Metodos/GetProductos';
import { ContextCredentials } from '../ContextCredentials';
import { CiSearch } from "react-icons/ci";
import "tailwindcss/tailwind.css";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { Palabra, setPalabra, setProductos } = useContext(ContextCredentials);
  const navigate = useNavigate();

  const handleSearch = async () => {
    await setProductos([]);
    await getProductos(Palabra, setProductos, setPalabra);
    navigate(`/ProductosBuscados/${Palabra.replace(/ /g, "+")}`);

  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full  justify-center">
      <input
        className='border-2  bg-white h-10 w-3/4 rounded-lg text-sm focus-yellow-500 focus:outline-none border-red-500'
        type="text"
        placeholder="Buscar producto en la tienda"
        value={Palabra}
        onChange={(e) => setPalabra(e.target.value)}
        onKeyPress={handleKeyPress} // Agregar el controlador de eventos para la tecla Enter
      />
      <div
        className="ml-2 p-2 cursor-pointer hover:bg-gray-200 rounded-md"
        onClick={handleSearch}
      >
        <CiSearch className=' bg-red-500 text-yellow-400 h-8 w-8 rounded-md font-bold border-3' />
      </div>
    </div>
  );
};

export default Search;
