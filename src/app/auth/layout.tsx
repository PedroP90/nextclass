import { Menu } from "@/components/commons/Menu";
import { FooterP } from "@/components/commons/footerP";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";

export default function AuthLayout({children}: IChildren){

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
            <main className='container mx-auto'>
                { children }
            </main>
            <footer>
                <FooterP/>
            </footer>
        </>
    )
}