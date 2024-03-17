import { ICategoria } from "@/interfaces/ICategorias";



const apiBD = 'http://3.89.177.61:3001/tienda';
const apiProductos = {

    listar: async (): Promise<ICategoria[]> => {
        const ruta = `${apiBD}/categorias`;
        const productos = await fetch(`${ruta}`, { cache: 'no-store'})
        //este res.json transforma el string en formato json que llega desde internet a un array javascript en formato json
            .then((res) => res.json())
        return productos
    },

    detalle: async (id: ICategoria["id_categoria"]): Promise<ICategoria> => {
        const ruta = `${apiBD}/categorias/${id}`;
        const producto = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        console.log(producto.nombre)
        return producto  
    }
}

export default apiProductos