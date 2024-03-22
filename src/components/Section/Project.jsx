import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Images from '../Images'
import Button from './../Button';
import { FaCode } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import ProjectCard from '../ProjectCard';
import { useNavigate } from 'react-router-dom';


const Project = ({ history }) => {
    let [more, setMore] = useState(false)
    let moreRef = useRef(0)

   // view code
    let handleprojectOne = () => {
        window.open('https://github.com/ayeshasiddikapopy/chat-Me', '_blank');
    }
    let handleprojectTwo = () => {
        window.open('https://github.com/ayeshasiddikapopy/add-me.git', '_blank');
    }
    let handleprojectThree = () => {
        window.open('https://github.com/ayeshasiddikapopy/namber-guess.git', '_blank');
    }
    let handleprojectFour = () => {
        window.open('https://github.com/ayeshasiddikapopy/add-me.git', '_blank');
    }

    // view site
    let handleViewtwo = () => {
        window.open('https://zingy-conkies-305180.netlify.app', '_blank');
    }
    let handleViewOne = () => {
        window.open('https://chat-meown.netlify.app', '_blank');
    }
    let handleViewthree = () => {
        window.open('https://jsgamees.netlify.app', '_blank');
    }
    let handleviewFour = () => {
        window.open('https://zingy-conkies-305180.netlify.app', '_blank');
    }

    // see more
    let handleMore = () => {
        setMore(!more)
    }
   
  return (
    <>
    <div className='p-2.5 overflow-hidden'>
        <Container>
            <SubHeading title='Projects' className='text-center sm:py-12 pb-7 '/>
            <div className={more ? "project__contents sm:flex sm:flex-wrap" : "project__contents sm:flex sm:flex-wrap delay_animi"}>
                <ProjectCard src = 'src/assets/p1.png' onclickcode={handleprojectOne} onclickView={handleViewOne}/>
                <ProjectCard src = 'src/assets/p2.png' onclickcode={handleprojectTwo} onclickView={handleViewtwo}/>
                <ProjectCard src = 'src/assets/p3.png' onclickcode={handleprojectThree} onclickView={handleViewthree}/>
                <ProjectCard src = 'src/assets/p4.png' onclickcode={handleprojectFour} onclickView={handleviewFour}/>
            </div>
           
            <div className={more ? 'project__contents sm:flex sm:flex-wrap project_show project_showAnim' : 'project__contents sm:flex sm:flex-wrap project_closeAnim project_close'}>
                <ProjectCard src = 'src/assets/p1.png' onclickcode={handleprojectOne} onclickView={handleViewOne}/>
                <ProjectCard src = 'src/assets/p2.png' onclickcode={handleprojectTwo} onclickView={handleViewtwo}/>
                <ProjectCard src = 'src/assets/p3.png' onclickcode={handleprojectThree} onclickView={handleViewthree}/>
                <ProjectCard src = 'src/assets/p4.png' onclickcode={handleprojectFour} onclickView={handleviewFour}/>
            </div>
            
             <div className='flex justify-center py-2 project__More my-2 cursor-pointer' onClick={handleMore}>
                {
                    !more 
                    ?
                    <p className='text-base text-black underline font-philospher font-bold hover:text-[#c14061] '>see more</p>
                    :
                    <p className='text-base text-black underline font-philospher font-bold hover:text-[#c14061] '>see less</p>
                }
            </div>
        </Container>

    </div>
    </>
  )
}

export default Project