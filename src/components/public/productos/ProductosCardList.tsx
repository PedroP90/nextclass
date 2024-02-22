import { IProducto } from '@/interfaces/IProductos';
import React, { FC } from 'react'
import { ProductosCard } from './ProductosCard';
import Link from 'next/link';

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
                        <ProductosCard key={producto.id_producto} productos = { producto }/>
                     </Link>
                </article>
            ))
        }
    </section>
  )
}