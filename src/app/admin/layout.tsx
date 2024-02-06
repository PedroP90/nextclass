
import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";


export default function AdminLayout({children}: IChildren){

    const links:ILink[] = [
        {name: 'Insertar', href: '/admin/productos'},
        {name: 'Borrar', href: '/admin/categorias'},
        {name: 'Actualizar', href: '/admin/proveedores'},
        {name: 'Listar', href: '/admin/about'}
      ];


    return (
        <>
            <header>
                <h1>Header del Backend</h1>
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}