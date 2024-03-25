import React from 'react'

const Images = ({className,src,children}) => {
  return (
    <>
    <div className={className}>
        {children}
        <img src={src} alt="photo" className='w-full h-full rounded'/>
    </div>
    </>
  )
}

export default Images