import React from 'react'
import { Image } from '@nextui-org/react';


const Logo = () => {
  return (
    <Image   
        alt="logo"
        className="object-cover rounded-xl"
        src="/icon.jpeg"
        width={45} 
        height={45}
    /> 
  )
}

export default Logo;