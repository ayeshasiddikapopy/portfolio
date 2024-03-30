import React from 'react'

const Images = ({className,src,children , onClick}) => {
  return (
    <>
    <div className={className} onClick={onClick}>
        {children}
        <img src={src} alt="photo" className='w-full h-full rounded cursor-pointer'/>
    </div>
    </>
  )
}

export default Images