

import React from 'react'
import apiProveedores from '@/model/proveedores/apiProveedores'
import { ProvTable } from '@/components/public/proveedores/ProvTable';


const ProveedoresPage = async () => {

  const proveedores = await apiProveedores.listar();
  
  return (
    <>
      <section className="pt-4">
        <ProvTable proveedores={proveedores}/>
      </section> 
    </>
  )
}



export default ProveedoresPage;

