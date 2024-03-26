import React from 'react'
import Images from './Images'
import Container from './Container'
import cv from '../assets/cv.svg'

const Resume = () => {
  return (
    <>
        <Container>
            <div className='w-full h-full cursor-pointer'>
                <Images src={cv} />
            </div>
        </Container>
    </>
  )
}

export default Resume