import React from 'react'
import Contact from '../Section/Contact'
import BackToPage from '../BackToPage';
import { useNavigate } from 'react-router-dom';

const ContactPages = () => {
  let navigate = useNavigate()

  let handleclick = () => {
    navigate('/')
  }
  return (
    <>
    <BackToPage onClick={handleclick}>
      <Contact/>
    </BackToPage>
    </>
  )
}

export default ContactPages