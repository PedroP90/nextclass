import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
  producto: IProducto;
}

export const ProductoDetail:FC<Props> = ({ producto }) => {

    console.log(producto)
    
    return(
        <Card className="py-4 flex flex-row flex-nowrap">
        <CardHeader className="pb-0 pt-2 px-4 basis-1/3">
            <Image 
                alt="Card background"
                className="object-cover rounded-xl"
                src={producto.img}
                width={270} 
                />
        </CardHeader>
        <CardBody className="overflow-visible py-2 basis-1/3">
            <h2>{ producto.nombre }</h2>
            <h3> {producto.categoria?.nombre}</h3>
        </CardBody>
        <CardFooter>
            <h3>{producto.precio}</h3>
        </CardFooter>
    </Card>
    )
}