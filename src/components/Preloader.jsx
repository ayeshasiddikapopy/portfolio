import React from 'react'

const Preloader = () => {
  return (
    <>
    <div className='w-full h-[100vh] bg-white flex justify-center content-center items-center preloading'>
        <div className='w-[200px] h-[200px] bg-white text-center'>
            <h2 className='text-[100px] font-bold text-[#676767] inline preloader'  >p</h2>
            <p className='text-[#676767] text-[1rem] pre_item'>Frontend developer</p>
        </div>
    </div>
    </>
  )
}

export default Preloader