

import React from 'react'
import { ProvTable } from './componentes/ProvTable'
import apiProveedores from '@/model/proveedores/apiProveedores'


const ProveedoresPage = async () => {

  const proveedores = await apiProveedores.listar();
  
  return (
    <>
      <h1>Proveedores</h1>
      <ProvTable proveedores={proveedores}/>
        
    </>
  )
}



export default ProveedoresPage;

