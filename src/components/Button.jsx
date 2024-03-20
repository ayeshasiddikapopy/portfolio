import React from 'react'

const Button = ({children, title, onClick}) => {
  return (
    <>
      <button className='py-2.5 px-6 cursor-pointer' onClick={onClick}>{title}</button>
    </>
  )
}

export default Button