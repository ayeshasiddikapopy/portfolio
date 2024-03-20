import React from 'react'

const Images = ({className,src}) => {
  return (
    <>
    <div className={className}>
        <img src={src} alt="photo" className='w-full h-full'/>
    </div>
    </>
  )
}

export default Images