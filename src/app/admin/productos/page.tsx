import apiProductos from "@/model/productos/apiProductos";
import { AdminTable } from "../components/AdminTable"
import { Search } from "../components/Search";
import { FooterP } from "@/components/commons/footerP";


const ProductosAdminPage = async () => {

    const productos = await apiProductos.listar();

    return (
        <>
            {/* <h1>Sección de Productos</h1> */}
            <Search placeholder="Búsqueda" />
            <br/>
            <AdminTable productos={productos}/>
            <footer>
                <FooterP/>
            </footer>
        </>
    )
}

export default ProductosAdminPage