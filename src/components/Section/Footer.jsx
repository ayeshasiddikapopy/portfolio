import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiGithubLogoThin } from "react-icons/pi";
import Images from '../Images';
import Container from '../Container';
import { PiCopyrightThin } from "react-icons/pi";
const Footer = () => {
  let handlefacebooke = () => {
    window.open('https://www.facebook.com/ayeshasiddikapopy67/', '_blank')
  }
  let handlelinked = () => {
    window.open('https://www.linkedin.com/in/ayeshasiddikapopy/', '_blank')
  }
   let handlegit = () => {
    window.open('https://github.com/ayeshasiddikapopy/', '_blank')
  }
  return (
    <>
      <div className='py-2 bg-black'>
        <Container>
          <div className='mx-auto w-[100px] h-[50px] my-2 '>
            <Images src='src/assets/flogo.png'/>
          </div>
          <div className="footer__content flex gap-x-2 justify-center items-center py-3 border-t border-">
              <Link><FaFacebookF className='text-white text-[20px] hover:text-blue-500 transition-[0.4s]' onClick={handlefacebooke}/></Link>
              <Link><PiGithubLogoThin className='text-white text-[24px] hover:text-green-300 transition-[0.4s]' onClick={handlegit}/></Link>
              <Link><FaLinkedin className='text-white text-[24px] hover:text-blue-300 transition-[0.4s]' onClick={handlelinked}/></Link>
          </div>
          <div className='flex justify-center'>
            <p className='text-white text-[10px] inline-block '>all <PiCopyrightThin className='inline'/>copyrights reserved by ayeshasiddikapopy</p>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer