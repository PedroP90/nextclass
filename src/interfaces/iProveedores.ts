export interface IProveedor {
    nombre:        string;
    cif:           string;
    telefono:      string;
    mail:          string;
    pais:          string;
    codigo_postal: string;
    direccion:     string;
    producto?:   string[];
}
