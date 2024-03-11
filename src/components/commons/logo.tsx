import React from 'react'
import { Image } from '@nextui-org/react';


const Logo = () => {
  return (
    <>
      <div className='flex items-center bg-transparent gap-1.5'>
        <p className="font-bold text-inherit text-red-900">HORDE</p>
        <Image   
            alt="logo"
            className="object-cover bg-transparent rounded-xl"
            src="/icono1.png"
            width={30} 
            height={30}
        />
        <p className="font-bold text-inherit text-red-900">SOLUTIONS</p>
      </div>
    </> 
  )
}

export default Logo;