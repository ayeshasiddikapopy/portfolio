import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'

const Contact = () => {
  return (
    <>
        <div className='py-3 px-2.5 bg-[#fff]'>
            <Container>
                <SubHeading title= 'contact' className='text-center py-8'/>
                <div className='w-[100%]]'>
                    <form >
                        <div className='sm:flex sm:justify-between w-full '>
                            <input type="text" className='outline-none p-2 my-3 sm:w-[48%] w-[100%] border-b-2' placeholder='Enter your Name'/>
                            <input type="email" className='outline-none p-2 my-3 sm:w-[48%] w-[100%] border-b-2' placeholder='Enter your Email'/>
                        </div>
                        <div>
                            <textarea placeholder='More to know' className='w-[50%] h-[200px] outline-none border-b overflow-auto px-2 py-4 '></textarea>
                        </div>
                    </form>
                </div>
                <div className='text-center pt-[2rem] sm:pt-[4rem]'>
                    <button type='button' className='px-3 py-2.5 bg-black text-[#fff] text-base border-transparent border font-philospher font-semibold rounded-md capitalize hover:bg-transparent hover:border hover:border-black hover:text-black transition-all'>submit</button>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Contact