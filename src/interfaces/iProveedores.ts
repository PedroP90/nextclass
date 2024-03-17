import { IProducto } from "./IProductos";

export interface IProveedor {
    nombre:        string;
    cif:           string;
    telefono:      string;
    mail:          string;
    pais:          string;
    codigo_postal: string;
    direccion:     string;
    producto?:   IProducto[];
}

export interface IColumn {
    key: string;
    label: string;
}
const ColumProveedores:IColumn[] = [
    {
        key: "cif",
        label: "CIF",
    },
    {
        key: "nombre",
        label: "NOMBRE",
    },
    {
        key: "telefono",
        label: "TELEFONO",
    },
    {
        key: "mail",
        label: "MAIL",
    },
    {
        key: "codigo_postal",
        label: "CODIGO_POSTAL",
    },
    {
        key: "direccion",
        label: "DIRECCION",
    },
  ];

  export default ColumProveedores;
