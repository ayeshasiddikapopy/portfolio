import React from 'react'
import { TiHtml5 } from "react-icons/ti";
const Card = ({title, item, children}) => {
  return (
    <>
     <div className='skills__contents sm:w-[50%] md:w-[20%] w-[80%] text-center p-[20px] rounded-3xl'>
        {children}
        <p className='text-base text-black font-philospher font-semibold uppercase py-2'>{title}</p>
        <p className='text-xs text-black font-sans font-normal '>{item}</p>
    </div>
    </>
  )
}

export default Card