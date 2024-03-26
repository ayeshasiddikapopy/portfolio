import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import Home from './components/pages/Home'
import Resume from './components/Resume'
import Some from './components/Some'
import Services from './components/Section/Services';
import About from './components/Section/About'
import Contact from './components/Section/Contact'
import Project from './components/Section/Project'

const App = () => {

  let router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/cv' element={<Resume/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
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