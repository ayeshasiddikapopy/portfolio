import React from 'react'
import Hero from '../Section/Hero';
import About from '../Section/About';
import Skills from '../Section/Skills';
import Project from '../Section/Project';
import Contact from '../Section/Contact';
import Team from '../Section/Team';
import Services from '../Section/Services';



const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Services/>
      <Team/>
      <Contact/>      
    </>
  )
}

export default Home