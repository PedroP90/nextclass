
import { Menu } from "@/components/commons/Menu";
import { FooterP } from "@/components/commons/footerP";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";
import { link } from "fs";





export default function PublicLayout({children}: IChildren){

    //peticion la BD <-- LINKS DEL FRONTEND
    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Categorias', href: '/public/categorias'},
        {name: 'Proveedores', href: '/public/proveedores'},
        {name: 'Quienes somos', href: '/public/about'}
      ];


    return (
        <>
            <header className="pt-4">
                {/* <h1>Header del Frontend</h1> */}
                {/* <Menu/> */}
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main> 
            <footer>
                <FooterP/>
            </footer>
        </>
    )
}