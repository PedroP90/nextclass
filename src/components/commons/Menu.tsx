//"use client"

import React, { FC } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from 'next/link';
import { ILink } from '@/interfaces/iLinks';
import Logo from './logo';

interface Props {
  links: ILink[],
  // segundo: ISegundo[]
}

//Componentes parametrizado (recibe parámetros)
export const Menu:FC<Props> = ({links}) => {

    return (
        <Navbar>
      {/* En una función de flecha se usan llaves y return si hay instrucciones java en medio
      que se traduce por paréntesis */}
      <NavbarBrand>
      <p className="font-bold text-inherit rojo-horda">HORDE</p>
        <Logo />
        <p className="font-bold text-inherit rojo-horda">SOLUTIONS</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => (//return
            <NavbarItem>
              <Link color="foreground" key= {link.name} href={ link.href }>
                { link.name }
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login">Login</Link>
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