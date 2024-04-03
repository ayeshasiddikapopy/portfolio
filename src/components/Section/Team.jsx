import React from 'react'
import Container from './../Container';
import Flex from './../Flex';
import TeamCard from '../TeamCard';
import { useNavigate } from 'react-router-dom';

const Team = () => {
   
    // linked facebook
    let handlefb = () => {
        window.open('https://www.facebook.com/CoderHamza', '_blank')
    }
    let handlefb2 = () => {
        window.open('https://www.facebook.com/search/top?q=toyaha%20jannat','_blank')
    }
    let handlefb3 = () => {
        window.open('https://www.facebook.com/profile.php?id=100036565272824','_blank')
    }
    let handlefb4 = () => {
        window.open('https://www.facebook.com/Sajid.ID40','_blank')
    }

    //----portfolio
    let handlelinked = () => {
        window.open('https://www.byteliberty.com/?fbclid=IwAR2pZC61UauOY3kdXVbPl1nu6gMYQkTP--8ZkhiZzXIlGc9ybZMr9J3Ortg', '_blank')
    }
    let handlelinked2 = () => {
        window.open('https://www.facebook.com/search/top?q=toyaha%20jannat','_blank')
    }
    let handlelinked3 = () => {
        window.open('https://www.linkedin.com/in/monirhossain010?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank')
    }
    let handlelinked4 = () => {
        window.open('https://www.linkedin.com/in/sajiduabir/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bd%2BrCi5aYQDiF%2FnPRFM7Cdw%3D%3D','_blank')
    }
    //---- linkedin
    let handleport = () => {
        window.open('https://www.linkedin.com/in/hamza-altamas-39541b1b4/','_blank')
    }
    let handleport2 = () => {
        window.open('https://www.facebook.com/search/top?q=toyaha%20jannat','_blank')
    }
    let handleport3 = () => {
        window.open('https://www.linkedin.com/in/monirhossain010/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank')
    }
    let handleport4 = () => {
        window.open('https://www.linkedin.com/in/sajiduabir/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bd%2BrCi5aYQDiF%2FnPRFM7Cdw%3D%3D','_blank')
    }

  return (
    <>
        <div className='sm:py-4'>
            <Container>
                <Flex className='sm:flex'>
                    <div className='sm:w-[50%] p-2 '>
                        <div className='sm:pt-[10rem] p-4'>
                            <h2 className='sm:text-[7rem] md:text-[5rem] text-[2rem] font-philospher team_heading leading-[6rem] after:left-0 '>Team Members</h2>
                            <p className='text-[0.75rem] font-sans font-normal text-[#676767] py-4 pr-4'> We are the teams to work various challanging projects. worked in git desktop remotely. done frontend projects static designs, with vanilla js, with react and used ui framworks and modern css also, also wanna learn backedn technology such as node js, mongo db, express. And wanna face different challanges to improve ourselves.</p>
                        </div>
                    </div>
                    <div className='sm:w-[50%] p-2'>
                        <div className='flex w-[100%] flex-col sm:flex-row items-center'>
                            <div className='sm:w-[50%] w-[60%] team_img p-2.5'>
                                <TeamCard title= 'Tohaya Jannat' teamimg='https://i.postimg.cc/BndDphZY/toha.jpg' designation='Frontend Devloper' onfacebook={handlefb2} onLinkedin={handlelinked2} onlink={handleport2}/>
                                <TeamCard title= 'Hamza Altamas' teamimg='https://i.postimg.cc/0yTw2Vct/hamza2.jpg' designation='Entrepreneur & Full stack developer at Byteliberty' onfacebook={handlefb} onLinkedin={handlelinked} onlink={handleport}/>
                            </div>
                            <div className='sm:mt-7 sm:w-[50%] w-[60%] team_img p-2.5'>
                                <TeamCard title= 'Monir Khan' teamimg='https://i.postimg.cc/bvpYqbmY/monir.jpg ' designation='Web app developer' onfacebook={handlefb3} onLinkedin={handlelinked3} onlink={handleport3}/>
                                <TeamCard title= 'Sajid Uddin Abir ' teamimg='https://i.postimg.cc/mkvRJFcs/sajid.jpg' designation='Frontend Developer' onfacebook={handlefb4} onLinkedin={handlelinked4} onlink={handleport4}/>
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