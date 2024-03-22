import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import Home from './components/pages/Home'
import Resume from './components/Resume'
import Some from './components/Some'
const App = () => {

  let router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/cv' element={<Resume/>}/>

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