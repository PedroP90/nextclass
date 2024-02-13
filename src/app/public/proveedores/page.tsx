'use client'
import Tabla from '@/components/commons/tabla/tabla'
import Tabla1 from '@/components/commons/tabla/tabla1'
import ColumProveedor, { IProveedor } from '@/interfaces/iProveedores'
import { getProveedores } from '@/model/proveedores/dataproveedor'
import React from 'react'


const ProveedoresPage = async () => {

  const proveedores: IProveedor[] = await getProveedores()
  return (
    <>
      <h1>Proveedores</h1>
      {/* <ul>
        {
          proveedores.map ((producto: IProveedor) => (
            <li key={producto.cif}>
              { producto.nombre}
            </li>
          ))
        }
      </ul> */}
      <Tabla rows={proveedores} columns={ColumProveedor}/>
    </>
  )
}



export default ProveedoresPage;

