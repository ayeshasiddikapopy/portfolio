import React, { useState } from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
// import ProjectCard from '../ProjectCard';
import ModalProject from '../ModalProject';
import ProjectCard from './../ProjectCard';


const Project = ({ history }) => {
    let [more, setMore] = useState(false)
    let [details, setdetails] = useState(false)
    let [project2, setproject2] = useState(false)
    let [project3, setproject3] = useState(false)
    let [project4, setproject4] = useState(false)

   // view code
    let handleprojectOne = () => {
        window.open('https://github.com/ayeshasiddikapopy/plants.git', '_blank');
    }
    let handleprojectTwo = () => {
        window.open('https://github.com/ayeshasiddikapopy/chat-Me.git', '_blank');
    }
    let handleprojectThree = () => {
        window.open('https://github.com/ayeshasiddikapopy/add-me.git', '_blank');
    }
    let handleprojectFour = () => {
        window.open('https://github.com/ayeshasiddikapopy/priority.git', '_blank');
    }

    // view site
    let handleViewtwo = () => {
        window.open('https://chat-meown.netlify.app/', '_blank');
    }
    let handleViewOne = () => {
        window.open('https://plantfuture.netlify.app/', '_blank');
    }
    let handleViewthree = () => {
        window.open('https://notes-web23.netlify.app/', '_blank');
    }
    let handleviewFour = () => {
        window.open('https://priority-ayeshasiddikapopys-projects.vercel.app/', '_blank');
    }

    // see more
    let handleMore = () => {
        setMore(!more)
    }
    //details
    let handleDetails = () => {
        setdetails(true)
    }
    let handleClose = () => {
        setdetails(false)
    }
    let handleCloseALl = () => {
        setdetails(false)
    }
    // project 2
    let handleproject2 = () => {
        setproject2(true)
    }
    let handleClose2 = () => {
        setproject2(false)
    }
    let handleCloseALl2 = () => {
        setproject2(false)
    }
    // project 3
    let handleproject3 = () => {
        setproject3(true)
    }
    let handleClose3 = () => {
        setproject3(false)
    }
    let handleCloseALl3 = () => {
        setproject3(false)
    }
    // project 4
    let handleproject4 = () => {
        setproject4(true)
    }
    let handleClose4 = () => {
        setproject4(false)
    }
    let handleCloseALl4 = () => {
        setproject4(false)
    }
  return (
    <>
    <div className='p-2.5 overflow-hidden bg-secondary'>
        <Container>
            <SubHeading title='Projects' className='text-center sm:py-3 py-3 '/>
            <div className={more ? "project__contents flex flex-wrap justify-center" : "project__contents flex flex-wrap justify-center delay_animi"}>
                <ProjectCard src = 'https://i.postimg.cc/FzVB9h3L/Screenshot-2024-04-30-205135.png' onclickcode={handleprojectOne} onclickView={handleViewOne} onClickDetails={handleDetails}/>
                <ProjectCard src = 'https://i.postimg.cc/BQ0VYgbv/p2.png' onclickcode={handleprojectTwo} onclickView={handleViewtwo} onClickDetails={handleproject2}/>
                <ProjectCard src = 'https://i.postimg.cc/cH0nYWPh/Screenshot-2024-04-30-210748.png' onclickcode={handleprojectThree} onclickView={handleViewthree} onClickDetails={handleproject3}/>
                <ProjectCard src = 'https://i.postimg.cc/MG90QpRn/p4.png' onclickcode={handleprojectFour} onclickView={handleviewFour} onClickDetails={handleproject4}/>
            </div>
           
            <div className={more ? 'project__contentss flex flex-wrap justify-center project_show project_showAnim' : 'project__contentss flex flex-wrap justify-center project_closeAnim project_close'}>
                <ProjectCard src = 'https://i.postimg.cc/BQ0VYgbv/p2.png' onclickcode={handleprojectOne} onclickView={handleViewOne}/>
                <ProjectCard src = 'https://i.postimg.cc/BQ0VYgbv/p2.png' onclickcode={handleprojectTwo} onclickView={handleViewtwo}/>
                <ProjectCard src = 'https://i.postimg.cc/s2qnpPbs/p3.png' onclickcode={handleprojectThree} onclickView={handleViewthree}/>
                <ProjectCard src = 'https://i.postimg.cc/4NsWbx27/p4.png' onclickcode={handleprojectFour} onclickView={handleviewFour}/>
            </div>
            
             <div className='flex justify-center py-2 project__More my-2 cursor-pointer transition-all' onClick={handleMore}>
                {
                    !more 
                    ?
                    <p className='text-base text-black underline font-philospher font-bold hover:text-[#c14061] transition-all'>see more</p>
                    :
                    <p className='text-base text-black underline font-philospher font-bold hover:text-[#c14061] transition-all'>see less</p>
                }
            </div>
        </Container>
    </div>
    {
        details &&
        <ModalProject title='plant selling' oncloseAll={handleCloseALl} onclose={handleClose} description='e-commerce website add to cart design , product pages, contacts and more ' technologi='html , css, vanilla js, gsap'/>
    }

    {
        project2 &&
        <ModalProject title='Chat me' oncloseAll={handleCloseALl2} onclose={handleClose2} description='Developed a chat application using React, Tailwind CSS, Firebase, and Redux Toolkit. Implemented user authentication, friend requests, profile creation, user blocking, and single/group messaging (realtime ) functionalities.' technologi='React, Tailwind CSS, Firebase (Authentication, Realtime Database), Redux Toolkit.'/>
    }
     {
        project3 &&
        <ModalProject title='notes' oncloseAll={handleCloseALl3} onclose={handleClose3} description='Created an note app using react js, .' technologi=': react , css'/>
    }
    {
        project4 &&
        <ModalProject title='tattos' oncloseAll={handleCloseALl4} onclose={handleClose4} description='Developed an e-commerce web application using React and Tailwind CSS. Enabled users to browse, select, and purchase items from an extensive product catalog. Implemented intuitive user interfaces and streamlined checkout processes to enhance the shopping experience.' technologi=': React, Tailwind CSS'/>
    }
    </>
  )
}

export default Project