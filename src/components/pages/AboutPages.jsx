import React from 'react'
import About from '../Section/About';
import BackToPage from '../BackToPage';
import { useNavigate } from 'react-router-dom';

const AboutPages = () => {
  let navigate = useNavigate()

  let handleclick = () => {
    navigate('/')
  }
  return (
    <>
    <BackToPage onClick={handleclick}>
      <About/>
    </BackToPage>
    </>
  )
}

export default AboutPages