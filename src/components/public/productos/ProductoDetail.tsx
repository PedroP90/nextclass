import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
  producto: IProducto;
}

export const ProductoDetail:FC<Props> = ({ producto }) => {

    
    return(
        <Card className="flex flex-wrap">
            <CardHeader className="h-full">
                <Image 
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={producto.img}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="">
                <h2>{ producto.nombre }</h2>
                <h3> {producto.categoria?.nombre}</h3>
            </CardBody>
            <CardFooter className="">
                <h3>{producto.precio}</h3>
            </CardFooter>
        </Card>

    )
}