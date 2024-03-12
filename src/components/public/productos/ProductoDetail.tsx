import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
  producto: IProducto;
}

export const ProductoDetail:FC<Props> = ({ producto }) => {

    
    return(
        <Card className="py-4 flex flex-row flex-wrap hover:bg-red-900 hover:text-white">
            <CardHeader className="justify-center pb-0 pt-2 px-4 mx-auto basis-1/3">
                <Image 
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={producto.img}
                    width={270} 
                    />
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3 space-y-2">
                <p><strong>Nombre:</strong> {producto.nombre}</p>
                <p><strong>Marca:</strong> {producto.marca}</p>
                <p><strong>Proveedor:</strong> {producto.proveedor?.nombre}</p>
                <p><strong>Modelo:</strong> {producto.modelo}</p>
                <p><strong>Color:</strong> {producto.color}</p>
                <p><strong>Categoría:</strong> {producto.categoria?.nombre}</p>
                <p><strong>Precio:</strong> {producto.precio}€</p>
            </CardBody>
            <CardFooter>
                <h3>{producto.descripcion}</h3>
            </CardFooter>
        </Card>

    )
}