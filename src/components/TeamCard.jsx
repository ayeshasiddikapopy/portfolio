import React, { useState } from 'react'
import Images from './Images'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const TeamCard = ({onfacebook, onLinkedin, onlink, teamimg,title,designation }) => {
    let [name, setName] = useState(true)
    
    let handleover = () => {
        console.log('df')
        setName(false)
    }
    let handleleave =() => {
        setName(true)
    }
   return (
    <>
    <Images src={teamimg} className='w-[100%] h-[18.75rem] py-2.5 relative team__Img overflow-hidden cursor-pointer' onMouseOver = {handleover} onMouseLeave = {handleleave}>
        <div className='overlay '>
            <h2 className='text-secondary font-philospher font-semibold capitalize bg-[#000000ca] rounded sm:text-[1.2rem] absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 team_before'>{title}</h2>
        </div>
        <div className='overlay2'>
            <div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] text-center team__after'>
                <p className='text-black text-[1rem] font-sans font-semibold py-3 px-2 bg-[#fff] rounded'>{designation}</p>
                <div className='flex justify-center py-2'>
                    <FaFacebookF className='bg-white mx-2 text-[2.125rem] p-2 rounded hover:bg-black  hover:font-bold transition-all hover:text-white cursor-pointer' onClick={onfacebook}/>
                    <TbWorld className='bg-white mx-2 text-[2.125rem] p-2 rounded hover:bg-black  hover:font-bold transition-all hover:text-white cursor-pointer' onClick={onLinkedin}/>
                    <FaLinkedinIn className='bg-white mx-2 text-[2.125rem] p-2 rounded hover:bg-black  hover:font-bold transition-all hover:text-white cursor-pointer' onClick={onlink}/>
                </div>
            </div>
        </div>
        {name &&
        <div className='absolute bottom-[10%] left-0 bg-white p-4 w-full text-center'>
            <p className='text-sm font-philospher font-black '>{title}</p>
            <p className='text-sm font-philospher font-black '>{designation}</p>
        </div>
        }
    </Images></>
  )
}

export default TeamCard