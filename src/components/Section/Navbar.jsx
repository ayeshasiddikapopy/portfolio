import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images';
import List from '../List';
import ListItem from '../ListItem';
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  let navigate = useNavigate()
  let [show, setshow] = useState(true)
  let [menuShow, setMenushow] = useState(false)
  let [bar, setbar] = useState(false)
  let bRef = useRef(null)
  let overRef = useRef(null)


  useEffect(()=>{
    let resizewindow = () => {

      if(window.innerWidth < 650){
        setbar(true)
        setshow(false)
        setMenushow(false)
      }else{
        setbar(false)
        setshow(true)
        setMenushow(false)

      }
    }
    resizewindow()
    window.addEventListener('resize',resizewindow)

  },[])



  let handlbar = () =>{
    bRef.current.classList.toggle('nav_show');
    overRef.current.classList.add('overlayNav-active');
    overRef.current.classList.add('overlayNav');
    setMenushow(!menuShow)
  }
  let handllclose = () => {
    bRef.current.classList.remove('nav_show');
    overRef.current.classList.remove('overlayNav-active');
    overRef.current.classList.remove('overlayNav');

    // setMenushow(!menuShow)
  }
  let handleOvarlay = () => {
    bRef.current.classList.remove('nav_show');
    overRef.current.classList.remove('overlayNav-active');
    overRef.current.classList.remove('overlayNav');
  }
  let handlehome = () => {
    navigate('/')
  }
  let handleAbout = () => {
    navigate('/about')
  }

  let handlService = () => {
    navigate('/services')
  }

  let handleContact = () => {
    navigate('/contact')
  }
  let handleLogo = () => {
    navigate('/')
  }


  return (
    <>
    <div className='py-2 bg-secondary '>
        <Container>
            <Flex className='flex justify-between items-center px-2.5'>
                <Images className='w-[100px] h-[50px]' src='https://i.postimg.cc/zGT4DcQK/logo.png' onClick={handleLogo}/>
                {
                  bar &&
                  <FaBars className='w-[40px] h-[40px] bg- text-black rounded-md absolute top-[2%] right-[3%] p-2 ' onClick={handlbar}/>
                }
                {
                show &&
                <div className="menu">
                  <List className=  'sm:flex gap-2'>
                    <ListItem title='home' className='py-2 px-4 nav_item' to='/' onClick={handlehome}/>
                    <ListItem title='About' className='py-2 px-4 nav_item' to='/about' onClick={handleAbout}/>
                    <ListItem title='services' className='py-2 px-4 nav_item' to='/services' onClick={handlService}/>
                    <ListItem title='contact' className='py-2 px-4 nav_item' to='/contact' onClick={handleContact}/>
                  </List>
                </div>
                }
                {/* resize menu started */}
                <div className= "nav_resize " ref={bRef}>

                  <div className='' onClick={handleOvarlay} ref={overRef}></div>

                  <div className='w-full bg-[#fff] '>
                    <IoIosClose className= {' nav_show text-[40px] bg-secondary rounded-md ' } onClick={handllclose}/>
                  </div>
                  <List className= 'flex gap-[4rem] flex-col items-center content-center w-[100%] bg-[#fff] h-[100%]'>
                    <ListItem title='home' className=' nav_resize_item ' to='/' onClick={handlehome}/>
                    <ListItem title='About' className='nav_resize_item' to='/about' onClick={handleAbout}/>
                    <ListItem title='services' className=' nav_resize_item' to='/services' onClick={handlService}/>
                    <ListItem title='contact' className=' nav_resize_item' to='/contact' onClick={handleContact}/>
                  </List>

                  <Images className='w-[100px] h-[50px] absolute bottom-[2%] left-[50%] translate-y-[2%] translate-x-[-50%]' src='https://i.postimg.cc/zGT4DcQK/logo.png' onClick={handleLogo}/>
                </div>
                {/* resize menu ended */}
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Navbar;