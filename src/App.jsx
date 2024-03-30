import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import Home from './components/pages/Home'
import Resume from './components/Resume'
import Some from './components/Some'
import Project from './components/Section/Project'
import AboutPages from './components/pages/AboutPages'
import ServicePages from './components/pages/ServicePages'
import ContactPages from './components/pages/ContactPages'



const App = () => {

  let router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/cv' element={<Resume/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<AboutPages/>}/>
      <Route path='/services' element={<ServicePages/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
    </Route>
      <Route path='/some' element={<Some/>}/>
    </>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App