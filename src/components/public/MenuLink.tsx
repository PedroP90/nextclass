"use client"

import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from 'next/link';

const links = [
  {name: 'Productos', href: '/public/productos'},
  {name: 'Categorias', href: '/public/categorias'},
  {name: 'Proveedores', href: '/public/proveedores'},
  {name: 'Quienes Somos', href: '/public/about'}
];


export const MenuLink = () => {

    return (
        <Navbar>
      {/* En una función de flecha se usan llaves y return si hay instrucciones java en medio
      que se traduce por paréntesis */}
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => (//return
            <NavbarItem>
              <Link color="foreground" href={ link.href }>
                { link.name }
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    )

}