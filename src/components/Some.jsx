import React, { useRef, useState } from 'react'


const Some = () => {
    let [m, setm] = useState(false)
    let mRef = useRef(0)
    let handleCLick = () => {
      setm(!m)
      // mRef.current.style.transition = '1s'
    }
    
  return (
    <>

    <p className='h-[400px] w-[400px] bg-red-300'></p>
    {
      !m ?
      <p onClick={handleCLick}>open</p>
      :
      <p onClick={handleCLick}>close</p>

    }
    {/* <p className=
    {m ? 'slideIn slideIn bg-slate-500 w-[200px] h-[200px]' : 'slideOut slideOut bg-slate-500 w-[200px] h-[200px]'}>
        toggle
    </p>
     */}
     <p className='h-[200px] w-[400px] bg-red-300'>opendd</p>
     {
      m &&
     <p className='h-[400px] w-[400px] bg-yellow-300'>opendd</p>
      
     }
    </>
  )
}

export default Some 