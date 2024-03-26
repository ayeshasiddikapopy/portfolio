import React from 'react'
import { FaCode } from "react-icons/fa";

const ServiceCard = ({description, title, children}) => {
  return (
    <>
        <div className='sm:w-[20%] w-[50%] p-2.5 text-center border rounded-br-lg border-secodary cursor-pointer hover:transition-all service_item'>
            {children}
            
            <h2 className='text-black text-base font-philospher font-bold py-3'>{title}</h2>
            <p className='text-[#676767] text-[0.75rem] font-sans font-semibold '>{description} </p>
        </div>
    </>
  )
}

export default ServiceCard