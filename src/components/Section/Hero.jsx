import React from 'react'
import Button from './../Button';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDownload } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";

const Hero = () => {
  let navigate = useNavigate()

  let handleDownload = () => {
    console.log('dddd')
    navigate('cv')
  }
  let handleLearn = () => {
    navigate('project')
  }

  return (
    <>
    <div className="bg-[url('src/assets/hero2.jpg')] w-full h-full py-7 bg-center bg-no-repeat bg-cover hero__bg relative z-0" >
      <div className='absolute w-full h-full top-0 left-0 bg-[#000000d2] z-[-1]'></div>
      <Container>
          <div className="hero md:py-[120px] text-center px-2.5">
              <h1 className='md:text-[50px] text-2xl font-bold font-philospher text-white lg:tracking-[1.5rem] '>Ayesha Siddika Popy</h1>
              <p className='text-[18px] font-medium font-sans text-white tracking-[0.2rem] hero_items py-4'>Frontend developer</p>
              <p className='text-sm font-normal font-sans text-white md:w-[70%] lg:w-[60%] w-full mx-auto my-5 text-center'>Enthusiasm to creating and designing the user interface and user experience of a websites and web applications. ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient also responsive designing.</p>
              
              <div className="hero__Gridbutton flex justify-center gap-[2rem]  py-5">
                
                  <div className='border border-white border-r-4 rounded-md text-white text-base font-semibold font-sans hero_btn flex items-center justify-center lg:w-[20%] sm:w-[30%] w-[30%]'>
                      <Button title='download cv' onClick={handleDownload} />
                      <AiOutlineDownload className='text-white text-[18px]'/>
                  </div>
                  <div className='border border-white border-r-4 rounded-md text-white text-base font-semibold font-sans hero_btn flex items-center justify-center lg:w-[20%] sm:w-[30%] w-[30%]' onClick={handleLearn}>
                    <Button title='Learn More'/>
                    <GoLinkExternal className='text-[18px] text-white'/>
                  </div>
              </div>
          </div>
      </Container>
    </div>
    </>
  )
}

export default Hero