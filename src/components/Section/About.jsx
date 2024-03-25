import React, { useRef } from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { CgCornerDoubleRightUp } from "react-icons/cg";
import Images from './../Images';


const About = () => {
  let navigate = useNavigate()
  let learnRef = useRef()

  let handleLearn = () => {
    navigate('cv')
    console.log('fff')
    
  }
  let handleMove = () => {
    learnRef.current.classList.add('about_btn');
 
  }
  let handleleave = () => {
    learnRef.current.classList.remove('about_btn');
    learnRef.current.style.transition = '0.5s'
  }
  return (
    <>
    <div className='bg-secondary py-2.5'>
        <Container>
          <div className='sm:flex sm:items-center'>
            <div className='md:w-[50%] p-4'>
              <Images src='src/assets/about.png'/>
            </div>
            <div className='md:p-4 md:w-[50%] w-full mx-auto my-2 px-2.5'>
              <SubHeading title='About me' className='pt-[20px]'/>
              <p className='text-sm font-medium font-sans text-black py-7 text-justify'>Enthusiasm to creating and designing the user interface (UI) and user experience (UX) of websites and web applications. ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient also responsive designing. works with various frontend technologies HTML,CSS, Javascript, use libraries such as React js, and modern css styling. Eager to learn more to grow frontend based carreer. Graduated in CSE from Gono Bishawbidyalay.</p>
              <div className='bg-black text-white w-[50%] rounded text-center flex items-center justify-center cursor-pointer' onClick={handleLearn} ref={learnRef} onMouseOver={handleMove} onMouseLeave={handleleave}>
                <Button title='learn more' />
                <CgCornerDoubleRightUp className='text-white text-[18px]'/>
              </div>
            </div>
          </div>
        </Container>
    </div>
    </>
  )
}

export default About