import React from 'react'
import Container from './../Container';
import Flex from './../Flex';
import TeamCard from '../TeamCard';
import { useNavigate } from 'react-router-dom';

const Team = () => {
   
    // linked facebook
    let handlefb = () => {
        window.open('www.facebook.com/CoderHamza','_blank')
    }
    let handlefb2 = () => {
        window.open('','_blank')
    }
    let handlefb3 = () => {
        window.open('','_blank')
    }
    let handlefb4 = () => {
        window.open('','_blank')
    }

    //linked linkedin
    let handlelinked = () => {
        window.open('https://www.linkedin.com/in/hamza-altamas/','_blank')
    }
    let handlelinked2 = () => {
        window.open('','_blank')
    }
    let handlelinked3 = () => {
        window.open('https://www.linkedin.com/in/monirhossain010?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank')
    }
    let handlelinked4 = () => {
        window.open('https://www.linkedin.com/in/sajiduabir/','_blank')
    }
    //liunked porfolio
    let handleport = () => {
        window.open('','_blank')
    }
    let handleport2 = () => {
        window.open('','_blank')
    }
    let handleport3 = () => {
        window.open('','_blank')
    }
    let handleport4 = () => {
        window.open('','_blank')
    }

  return (
    <>
        <div className='py-4 '>
            <Container>
                <Flex className='sm:flex'>
                    <div className='sm:w-[50%] p-2 relative'>
                        <div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                            <h2 className='sm:text-[7rem] md:text-[5rem] text-[2rem] font-philospher team_heading leading-[6rem]'>Team Members</h2>
                            <p className='text-[12px] font-sans font-normal text-[#676767] pt-4'> We are the teams to work various challanging projects. worked in git desktop remotely. done frontend projects static designs, with vanilla js, with react and used ui framworks and modern css also, also wanna learn backedn technology such as node js, mongo db, express. And wanna face different challanges to improve ourselves.</p>
                        </div>
                    </div>
                    <div className='sm:w-[50%] p-2'>
                        <div className='sm:flex'>
                            <div>
                                <TeamCard title= 'Tohaya Jannat' teamimg='../src/assets/t1.png' designation='frontend devloper' onfacebook={handlefb2} onLinkedin={handlelinked2} onlink={handleport2}/>
                                <TeamCard title= 'hamza Altamas' teamimg='../src/assets/hamza.jpg' designation='Entrepreneur & Full Stack Developer at Byteliberty' onfacebook={handlefb} onLinkedin={handlelinked} onlink={handleport}/>
                            </div>
                            <div className='sm:mt-7'>
                                <TeamCard title= 'monir khan' teamimg='../src/assets/monir.jpg' designation='Frontend developer' onfacebook={handlefb3} onLinkedin={handlelinked3} onlink={handleport3}/>
                                <TeamCard title= 'Sajid Uddin Abir ' teamimg='../src/assets/t1.png' designation='frontend developer' onfacebook={handlefb4} onLinkedin={handlelinked4} onlink={handleport4}/>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Team