'use client'

import { Menu } from "@/components/commons/Menu"
import { ILink } from "@/interfaces/iLinks";


export const Header = () => {

    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Categorias', href: '/public/categorias'},
        {name: 'Proveedores', href: '/public/proveedores'},
        {name: 'Quienes somos', href: '/public/about'}
      ];


  return (
    <>
      
          <header>
            <Menu links= {links} />
          </header>



    </>
  )
}