import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Section/Navbar'
import Footer from './Section/Footer'


const Rootlayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Rootlayout