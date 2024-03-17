import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
    producto: IProducto;
}

export const ProductoCard:FC<Props> = ({producto}) => {
  return (
    <Card className="py-4 min-h-72 max-h-72 hover:bg-red-900 hover:text-white">
        <CardHeader className="pb-0 pt-2 px-4 h-10 flex-col items-start">
            <h5 className="font-bold text-sm hover:text-red-900">{producto.categoria?.nombre}</h5>
        </CardHeader>
        <CardBody className="group overflow-visible h-48 py-2 flex flex-wrap justify-center items-center relative">
            <Image
                alt="Card background"
                className="custom-drop-shadow object-cover rounded-xl max-h-44 ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
                src={producto.img}
            />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 h-10 flex justify-between">
            <p className="text-tiny uppercase font-bold ">
                { producto.nombre }
            </p>
            <p className="text-tiny uppercase font-bold ">
                { producto.precio }€
            </p>
        </CardFooter>
    </Card>
  )
}