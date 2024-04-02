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
    <div className="bg-[#fff] w-full h-full py-2 bg-center bg-no-repeat bg-cover hero__bg relative z-0 cursor-pointer" >
      {/* <div className='absolute w-full h-full top-0 left-0 bg-[#000000d2] z-[-1]'></div> */}
      <Container>
          <div className="hero md:py-[5rem] py-2 text-center px-2.5">
              <h1 className='md:text-[3.125rem] text-2xl font-bold font-philospher text-black tracking-widest lg:tracking-[1.5rem] '>Ayesha Siddika Popy</h1>
              <p className='md:text-[1.125rem] text-[1rem] font-medium font-sans text-black md:tracking-[0.2rem] hero_items md:py-4 py-2'>Frontend developer</p>
              <p className='md:text-sm text-[0.75rem] font-normal font-sans text-black md:w-[70%] lg:w-[60%] w-full mx-auto my-5 text-center'>Enthusiasm to creating and designing the user interface and user experience of a websites and web applications. ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient also responsive designing.</p>
              
              <div className="hero__Gridbutton flex justify-center gap-[2rem] py-5">
                
                  <div className='border border-black border-r-4 rounded-md text-black text-base font-semibold font-sans hero_btn flex items-center justify-center lg:w-[20%] sm:w-[30%] w-[30%] hover:text-[#c14061] '>
                      <Button title='download cv' onClick={handleDownload} />
                      <AiOutlineDownload className='text-black text-[1.125rem] pr-1'/>
                  </div>
                  <div className='border border-black border-r-4 rounded-md text-black text-base font-semibold font-sans hero_btn flex items-center justify-center lg:w-[20%] sm:w-[30%] w-[30%] hover:text-[#c14061]' onClick={handleLearn}>
                    <Button title='Learn More'/>
                    <GoLinkExternal className='text-1.125rem] text-black pr-1'/>
                  </div>
              </div>
          </div>
      </Container>
    </div>
    </>
  )
}

export default Hero