import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Section/Navbar'
import Footer from './Section/Footer'
import Preloader from './Preloader'


const Rootlayout = () => {
  let [preload, setpreload] = useState(false)
  useEffect(()=>{
    setpreload(true)
    setTimeout(()=>{
      setpreload(false)
    },500)
  },[])
  return (
    <>
      {
        preload ?
        <Preloader/>
        :
        <>
         <Navbar/>
        <Outlet/>
        <Footer/>
        </>
      }
       
    </>
  )
}

export default Rootlayout