import React, { useEffect } from 'react'
import Services from '../Section/Services'
import BackToPage from '../BackToPage';
import { useNavigate } from 'react-router-dom';

const ServicePages = () => {
    let navigate = useNavigate()

    let handleclick = () => {
      navigate('/')
    }
    useEffect(()=>{
      console.log(window.location.pathname)
    },[])
    return (
      <>
      <BackToPage onClick={handleclick}>
        <Services/>
      </BackToPage>
      </>
    )
}

export default ServicePages