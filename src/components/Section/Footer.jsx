import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiGithubLogoThin } from "react-icons/pi";
import Images from '../Images';
import Container from '../Container';
const Footer = () => {
  return (
    <>
      <div className='py-2 bg-black'>
        <Container>

        <div className='mx-auto w-[100px] h-[50px] my-2 '>
          <Images src='src/assets/flogo.png'/>
        </div>
        <div className="footer__content flex gap-x-2 justify-center items-center py-3 border-t border-">
            <Link><FaFacebookF className='text-white text-[20px] hover:text-blue-500 transition-[0.4s]'/></Link>
            <Link><PiGithubLogoThin className='text-white text-[24px] hover:text-green-300 transition-[0.4s]'/></Link>
            <Link><FaLinkedin className='text-white text-[24px] hover:text-blue-300 transition-[0.4s]'/></Link>
        </div>
        </Container>
      </div>
    </>
  )
}

export default Footer