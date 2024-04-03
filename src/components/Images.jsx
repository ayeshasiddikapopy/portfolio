import React from 'react'

const Images = ({className,src,children , onClick, onMouseOver , onMouseLeave}) => {
  return (
    <>
    <div className={className} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {children}
        <img src={src} alt="photo" className='w-full h-full rounded cursor-pointer'/>
    </div>
    </>
  )
}

export default Images