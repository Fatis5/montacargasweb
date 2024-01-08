import React from 'react'
import Search from '../littleComponents/Search'
import { useContext } from 'react'
import { ContextCredentials } from '../ContextCredentials'
import Contacto from "../screens/Contacto"
import Categorias from './Categorias'


const Tienda = () => {
  const {} = useContext(ContextCredentials)
  return (
<div>
<div
    className='flex  items-center flex-col bg-gradient-to-r from-cyan-500 to-blue-500 justify-center '
    >
      
      
      <Categorias/>
      
      
  
        
        

    </div>
    <Contacto/>
</div>
  )
}

export default Tienda