import { ICategoria } from "./ICategorias";
import { IProveedor } from "./iProveedores";

export interface IProducto {
    id_producto: string;
    nombre:      string;
    marca:       string;
    modelo:      string;
    descripcion: string;
    stock:       string;
    precio:      string;
    peso_kg:     string;
    color:       string;
    img:         string;
    categoria?:  ICategoria;
    // categoria?:   {
    //     id_categoria: string;
    //     nombre: string;
    //     descripcion: string;
    // };
    proveedor:   IProveedor;
}