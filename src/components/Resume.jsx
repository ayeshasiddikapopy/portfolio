import React from 'react'
import Images from './Images'
import Container from './Container'

const Resume = () => {
  return (
    <>
        <Container>
            <div className='w-full h-full cursor-pointer'>
                <Images src='src/assets/cv.svg' />
            </div>
        </Container>
    </>
  )
}

export default Resume