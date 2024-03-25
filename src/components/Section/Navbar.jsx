import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images';
import List from '../List';
import ListItem from '../ListItem';
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {

  let [show, setshow] = useState(true)
  let [menuShow, setMenushow] = useState(false)
  let [bar, setbar] = useState(false)

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

  let bRef = useRef(null)
  let overRef = useRef(null)

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
  let handleOvarlay =() => {
    bRef.current.classList.remove('nav_show');
    overRef.current.classList.remove('overlayNav-active');
    overRef.current.classList.remove('overlayNav');
  }

  return (
    <>
    <div className='py-2 bg-secondary '>
        <Container>
            <Flex className='flex justify-between items-center px-2.5'>
                <Images className='w-[100px] h-[50px]' src='src/assets/logo.png'/>
                {
                  bar &&
                  <FaBars className='w-[40px] h-[40px] bg- text-black rounded-md absolute top-[2%] right-[3%] p-2 ' onClick={handlbar}/>
                }
                {
                show &&
                <div className="menu">
                  <List className=  'sm:flex gap-2'>
                    <ListItem title='home' className='py-2 px-4 nav_item' to='/'/>
                    <ListItem title='About' className='py-2 px-4 nav_item'/>
                    <ListItem title='services' className='py-2 px-4 nav_item'/>
                    <ListItem title='contact' className='py-2 px-4 nav_item'/>
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
                    <ListItem title='home' className=' nav_resize_item' to='/'/>
                    <ListItem title='About' className='nav_resize_item'/>
                    <ListItem title='services' className=' nav_resize_item'/>
                    <ListItem title='contact' className=' nav_resize_item'/>
                  </List>

                  <Images className='w-[100px] h-[50px] absolute bottom-[2%] left-[50%] translate-y-[2%] translate-x-[-50%]' src='src/assets/logo.png'/>
                </div>
                {/* resize menu ended */}
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Navbar;