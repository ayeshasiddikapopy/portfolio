import React from 'react'
import { TiHtml5 } from "react-icons/ti";
const Card = ({title, item, children}) => {
  return (
    <>
     <div className='skills__contents sm:w-[50%] md:w-[20%] w-[80%] text-center p-[1.3rem] rounded-3xl cursor-pointer'>
        {children}
        <p className='md:text-base text-[0.875rem] text-black font-philospher font-semibold uppercase py-2'>{title}</p>
        <p className='text-xs text-black font-sans font-normal '>{item}</p>
    </div>
    </>
  )
}

export default Card