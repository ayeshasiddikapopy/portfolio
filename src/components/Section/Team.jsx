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
        window.open('www.facebook.com/toyahajannat07','_blank')
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
        <div className='sm:py-4'>
            <Container>
                <Flex className='sm:flex'>
                    <div className='sm:w-[50%] p-2 '>
                        <div className='sm:pt-[10rem] p-4'>
                            <h2 className='sm:text-[7rem] md:text-[5rem] text-[2rem] font-philospher team_heading leading-[6rem] after:left-0 '>Team Members</h2>
                            <p className='text-[12px] font-sans font-normal text-[#676767] py-4 pr-4'> We are the teams to work various challanging projects. worked in git desktop remotely. done frontend projects static designs, with vanilla js, with react and used ui framworks and modern css also, also wanna learn backedn technology such as node js, mongo db, express. And wanna face different challanges to improve ourselves.</p>
                        </div>
                    </div>
                    <div className='sm:w-[50%] p-2'>
                        <div className='sm:flex w-[100%]'>
                            <div className='sm:w-[50%] w-full'>
                                <TeamCard title= 'Tohaya Jannat' teamimg='https://i.postimg.cc/BndDphZY/toha.jpg' designation='frontend devloper' onfacebook={handlefb2} onLinkedin={handlelinked2} onlink={handleport2}/>
                                <TeamCard title= 'hamza Altamas' teamimg='https://i.postimg.cc/hvfPHBp9/hamza.jpg' designation='Entrepreneur & Full Stack Developer at Byteliberty' onfacebook={handlefb} onLinkedin={handlelinked} onlink={handleport}/>
                            </div>
                            <div className='sm:mt-7 sm:w-[50%] w-full'>
                                <TeamCard title= 'monir khan' teamimg='https://i.postimg.cc/bvpYqbmY/monir.jpg ' designation='web app developer' onfacebook={handlefb3} onLinkedin={handlelinked3} onlink={handleport3}/>
                                <TeamCard title= 'Sajid Uddin Abir ' teamimg='https://i.postimg.cc/mkvRJFcs/sajid.jpg' designation='frontend developer' onfacebook={handlefb4} onLinkedin={handlelinked4} onlink={handleport4}/>
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