import React, { useRef, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import Images from './Images';
import Button from './Button';

const ProjectCard = ({src, onclickcode, onclickView}) => {
    let [angle, setAngle] = useState(false)
    let [angle2, setAngle2] = useState(false)
    let btnRef = useRef()
    let btn2Ref = useRef()

    let handlemove = () => {
        setAngle(true)
        btnRef.current.style.transition = '0.4s'
    }
    let handleleave = () => {
        setAngle(false)
        btnRef.current.style.transition = '1s'
    }
    let handlemove2 = () => {
        setAngle2(true)
        btn2Ref.current.style.transition = '0.4s'
    }
    let handleleave2 = () => {
        setAngle2(false)
        btn2Ref.current.style.transition = '0.4s'
    }

  return (
    <>
    <div className="project__items w-[100%] md:w-[25%] sm:w-[50%] p-5 rounded-sm overflow-hidden">
        <div className='project_img relative overflow-hidden'>
            <Images src={src} className='w-full h-[250px] bg-black rouded-sm'/>
            <div className='project__overlay '>
                <div className='flex justify-center gap-3 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'>
                    <button type='button' className='text-black bg-white sm:px-3 sm:py-1 font-sans text-sm font-semibold rounded-md flex items-center gap-1 project_button active' onMouseMove={handlemove} onMouseLeave={handleleave} ref={btnRef} onClick={onclickcode}>code
                    {angle &&
                    <FaAngleDoubleRight />
                    }
                    </button>
                    <button type='button' className='text-black bg-white sm:px-3 sm:py-1 font-sans text-sm font-semibold rounded-md flex items-center gap-1 project_button' onMouseMove={handlemove2} onMouseLeave={handleleave2} ref={btn2Ref} onClick={onclickView}>view
                    {angle2 &&
                    <FaAngleDoubleRight />
                    }
                    </button>
                </div>
            </div>
        </div>
        <div className='text-white bg-black text-center font-normal capitalize rounded-b-md project__button'>
            <Button title='Details'/>
        </div>
    </div>
    </>
  )
}

export default ProjectCard