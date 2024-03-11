
import { ProductoDetail } from '@/components/public/productos/ProductoDetail';
import apiProductos from '@/model/productos/apiProductos'
import React from 'react'


const ProductoPage = async ({ params: { id } }: { params: { id: string } }) => {

  const producto = await apiProductos.detalle(id);

  return (
    <section className="container mx-auto px-4 mt-6 flex justify-center">
        <ProductoDetail producto={producto} />
    </section>
  )
}

export default ProductoPage
