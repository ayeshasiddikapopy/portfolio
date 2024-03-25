import React, { useState } from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import ProjectCard from '../ProjectCard';
import ModalProject from '../ModalProject';


const Project = ({ history }) => {
    let [more, setMore] = useState(false)
    let [details, setdetails] = useState(false)
    let [project2, setproject2] = useState(false)
    let [project3, setproject3] = useState(false)
    let [project4, setproject4] = useState(false)

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
            <div className={more ? "project__contents sm:flex sm:flex-wrap" : "project__contents sm:flex sm:flex-wrap delay_animi"}>
                <ProjectCard src = '../src/assets/p1.png' onclickcode={handleprojectOne} onclickView={handleViewOne} onClickDetails={handleDetails}/>
                <ProjectCard src = '../src/assets/p2.png' onclickcode={handleprojectTwo} onclickView={handleViewtwo} onClickDetails={handleproject2}/>
                <ProjectCard src = '../src/assets/p3.png' onclickcode={handleprojectThree} onclickView={handleViewthree} onClickDetails={handleproject3}/>
                <ProjectCard src = '../src/assets/p4.png' onclickcode={handleprojectFour} onclickView={handleviewFour} onClickDetails={handleproject4}/>
            </div>
           
            <div className={more ? 'project__contentss sm:flex sm:flex-wrap project_show project_showAnim' : 'project__contentss sm:flex sm:flex-wrap project_closeAnim project_close'}>
                <ProjectCard src = 'src/assets/p1.png' onclickcode={handleprojectOne} onclickView={handleViewOne}/>
                <ProjectCard src = 'src/assets/p2.png' onclickcode={handleprojectTwo} onclickView={handleViewtwo}/>
                <ProjectCard src = 'src/assets/p3.png' onclickcode={handleprojectThree} onclickView={handleViewthree}/>
                <ProjectCard src = 'src/assets/p4.png' onclickcode={handleprojectFour} onclickView={handleviewFour}/>
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
        <ModalProject title='add notes' oncloseAll={handleCloseALl} onclose={handleClose} description='Developed a notes web application allowing users to create, edit, delete, and update notes. Built with user-friendly interfaces using React and styled with Tailwind CSS, enabling seamless note management and organization. Utilized Firebase for real-time data storage and synchronization, ensuring a reliable and responsive user experience.' technologi='React, Tailwind CSS, Firebase'/>
    }

    {
        project2 &&
        <ModalProject title='Chat me' oncloseAll={handleCloseALl2} onclose={handleClose2} description='Developed a chat application using React, Tailwind CSS, Firebase, and Redux Toolkit. Implemented user authentication, friend requests, profile creation, user blocking, and single/group messaging (realtime ) functionalities.' technologi='React, Tailwind CSS, Firebase (Authentication, Realtime Database), Redux Toolkit.'/>
    }
     {
        project3 &&
        <ModalProject title='fun games' oncloseAll={handleCloseALl3} onclose={handleClose3} description='Created an interactive game interface using HTML and styled it with CSS for an engaging user experience.
        Implemented game logic in JavaScript, allowing players to input their guesses and determining the winner based on matching criteria.Enhanced user engagement through dynamic feedback and intuitive gameplay mechanics.' technologi=' HTML, CSS, JavaScript'/>
    }
    {
        project4 &&
        <ModalProject title='tattos' oncloseAll={handleCloseALl4} onclose={handleClose4} description='Developed an e-commerce web application using React and Tailwind CSS. Enabled users to browse, select, and purchase items from an extensive product catalog. Implemented intuitive user interfaces and streamlined checkout processes to enhance the shopping experience.' technologi=': React, Tailwind CSS'/>
    }
    </>
  )
}

export default Project