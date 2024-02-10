import { IProducto } from '@/interfaces/IProductos'
import React from 'react'

// const Productospage = () => {

//   async function getProductos() {
//     const res = await fetch('http//192.168.1.224:3001/tienda/productos', {cache: 'no-store'})
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
//     return res.json
//   }
//   const productos: IProducto[] = await getProductos()

//   return (
//     <>
//       <h1>Productos</h1>
//       <ul>
//         {
//           productos.map((producto: IProducto) => (
//             <li>
//               { producto.nombre}
//             </li>
//           ))
//         }
//       </ul>
//     </>
//   )
// }
export default function ProductosPage(){
  return (
    <h1>Productos</h1>
  )
}

