import { IProducto } from "@/interfaces/IProductos";


const apiBD = 'http://3.89.177.61:3001/tienda';
const apiProductos = {

    listar: async (): Promise<IProducto[]> => {
        const ruta = `${apiBD}/productos`;
        const productos = await fetch(`${ruta}`, { cache: 'no-store'})
        //este res.json transforma el string en formato json que llega desde internet a un array javascript en formato json
            .then((res) => res.json())
        return productos
    },

    detalle: async (id: IProducto["id_producto"]): Promise<IProducto> => {
        const ruta = `${apiBD}/productos/${id}`;
        const producto = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        console.log(producto.nombre)
        return producto
    }
}

export default apiProductos