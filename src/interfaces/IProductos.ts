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
    key?:        string;
    categoria?:  ICategoria;
    proveedor?:   IProveedor;
}

export interface IRespProd {
  msg: string;
  status: number;
  data: IProducto;
  token: string;
}

export interface IColumn {
    key: string;
    label: string;
}
const ColumProducto:IColumn[] = [
    {
      key: "id_product",
      label: "ID_PRODUCT",
    },
    {
      key: "nombre",
      label: "NOMBRE",
    },
    {
      key: "page",
      label: "PAGE",
    },
    {
      key: "precio",
      label: "PRECIO",
    },
    {
        key: "img",
        label: "Imagen",
    },
  ];

  export default ColumProducto;