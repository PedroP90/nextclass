import { IProducto } from '@/interfaces/IProductos';
import React, { FC } from 'react'
import { ProductosCard } from './ProductosCard';

interface Props {
    productos: IProducto[];
}

export const ProductosCardList:FC<Props> = ({productos}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            productos.map( (producto) => (
                <article key={producto.id_producto} className="basis-1/4 p-2">
                     <ProductosCard key={producto.id_producto} productos = { producto }/>
                </article>
            ))
        }
    </section>
  )
}