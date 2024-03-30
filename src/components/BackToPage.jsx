import React from 'react'
import Container from './Container'
import { FaArrowLeft } from 'react-icons/fa6'

const BackToPage = ({onClick,children}) => {
  return (
    <>
    <div className='bg-black'>
        <Container>
          <div className='flex justify-end p-2.5 items-center gap-x-2' onClick={onClick} >
              <FaArrowLeft className='text-white hover:text-secondary' />
              <p className='text-white text-sm first-letter:capitalize hover:text-secondary '>back to home</p>
          </div>
        </Container>
        {children}
    </div>
    </>
  )
}

export default BackToPage