import { IProveedor } from "@/interfaces/iProveedores";


const apiBD = 'http://3.89.177.61:3001/tienda';
const apiProveedores = {

    listar: async (): Promise<IProveedor[]> => {
        const ruta = `${apiBD}/proveedor`;
        const productos = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return productos
    },

    detalle: async (id: IProveedor["cif"]): Promise<IProveedor> => {
        const ruta = `${apiBD}/proveedor/${id}`;
        const producto = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return producto
    }
}

export default apiProveedores