import React, { useRef, useState } from 'react'


const Some = () => {
  let [details, setdetails] = useState(false)
      //details
      let handleDetails = () => {
        setdetails(true)
        console.log('dd')
    }
    let handleClose = () => {
        setdetails(false)
    }
    let handleCloseALl = () => {
        setdetails(false)
    }
    
  return (
    <>

    <div className='bg-red-500 py-4' onClick={handleDetails}>
      <p>details</p>
    </div>

{
        details &&
        
        <div className=''>
          <div className='w-full h-full bg-[#0000007b] fixed top-0 left-0'  onClick={handleCloseALl}></div>
            <div className='w-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] p-2.5 rounded-md'>
                <h2 className='text-base font-philospher text-black font-bold gg py-1 my-1'>Project : <span className=''>chat me</span></h2>
                <p className='text-[12px] text-[#676767] font-sans font-normal py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odit eius impedit et rem provident maxime dignissimos vitae delectus. Necessitatibus veniam dignissimos cum cupiditate rerum. Excepturi commodi atque dolore minima.</p>
                <p className='text-base text-black font-philospher font-semibold '>Technologies : <span className='text-[12px] font-normal font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, veritatis.</span></p>
                <p className='text-center inline mx-auto' onClick={handleClose}>close</p>
            </div>
        </div>
    }
    </>
  )
}

export default Some 