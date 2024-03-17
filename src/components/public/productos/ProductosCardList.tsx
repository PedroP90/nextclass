import { IProducto } from '@/interfaces/IProductos';
import React, { FC } from 'react'

import Link from 'next/link';
import { ProductoCard } from '../categorias/ProductosCard';

interface Props {
    productos: IProducto[];
}

export const ProductosCardList:FC<Props> = ({productos}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            productos.map( (producto) => (
                <article key={producto.id_producto} className="basis-1/4 p-2">
                     <Link key={producto.id_producto} href={`/public/productos/${producto.id_producto}`}>
                        <ProductoCard key={producto.id_producto} producto = { producto }/>
                     </Link>
                </article>
            ))
        }
    </section>
  )
}