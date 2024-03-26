import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({title,onClick,className, to}) => {
  return (
    <>
        <li onClick={onClick} className={className}>
          <Link className=' text-black text-base font-sans font-medium capitalize hover:text-[#c14061] hover:transition-all hover:font-bold' to={to} >

            {title}
            
          </Link>
          </li>
    </>
  )
}

export default ListItem