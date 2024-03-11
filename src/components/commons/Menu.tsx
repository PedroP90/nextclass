//"use client"

import React, { FC } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar} from "@nextui-org/react";
import Link from 'next/link';
import { ILink } from '@/interfaces/iLinks';
import Logo from './logo';
import Cookies from 'js-cookie';

interface Props {
  links: ILink[],
  // segundo: ISegundo[]
}

//Componentes parametrizado (recibe parámetros)
export const Menu:FC<Props> = ({links}) => {

    return (
      <Navbar className="bg-gradient-to-b from-slate-300 via-transparent to-gray-300">
      {/* En una función de flecha se usan llaves y return si hay instrucciones java en medio
      que se traduce por paréntesis */}
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {
            links.map ( (link) => (//return
              <NavbarItem>
                <Link color="foreground" key= {link.name} href={ link.href } className="font-bold hover:text-red-900 transition-colors ease-in-out hover:duration-300">
                  { link.name }
                </Link>
              </NavbarItem>
            ))
          }
        </NavbarContent>
        { ! Cookies.get('email') 
            ?
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="/auth/login" className="hover:text-blue-500">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
            :
              <>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <h2>{Cookies.get('email')}</h2>
              </>
              
        }
    </Navbar>
    )

}