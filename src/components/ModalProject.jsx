import React from 'react'

const ModalProject = ({oncloseAll, onclose ,description,technologi,title}) => {
   
  return (
    <>
         <div className='w-full h-full fixed top-0 left-0'>
            <div className='w-full h-full bg-[#0000007b]' onClick={oncloseAll}></div>
            <div className='w-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] p-2.5 rounded-md'>
                <h2 className='text-base font-philospher text-black font-bold gg py-1 my-1'>Project : <span className=''>{title}</span></h2>
                <p className='text-[12px] text-[#676767] font-sans font-normal py-2'>{description}</p>
                <p className='text-base text-black font-philospher font-semibold pb-1'>Technologies : <span className='text-[12px] font-normal font-sans'>{technologi}</span></p>
                <p className='text-center inline mx-auto bg-red-400 py-1 px-2 rounded-md font-philospher text-secondary font-bold hover:bg-red-500 transition-all' onClick={onclose}>close</p>
            </div>
        </div>
    </>
  )
}

export default ModalProject