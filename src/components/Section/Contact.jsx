import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'

const Contact = () => {
  return (
    <>
        <div className='py-3 px-2.5'>
            <Container>
                <div>
                    <SubHeading title= 'contact' className='text-center py-8'/>
                    <form action="">
                        <div className='sm:flex '>
                            <input type="text" className='outline-none p-2 m-2 sm:w-[50%] w-full my-3 border-b-2' placeholder='Enter your Name'/>
                            <input type="email" className='outline-none p-2 m-2 sm:w-[50%] w-full my-3  border-b-2' placeholder='Enter your Email'/>
                        </div>
                        <div>
                            <textarea placeholder='More to know' className='w-[50%] h-[200px] outline-none border-b overflow-auto px-2 py-4'></textarea>
                        </div>
                    </form>
                    <div className='text-center pt-[2rem] sm:pt-[4rem]'>
                        <button type='button' className='px-3 py-2.5 bg-black text-[#fff] text-base border-transparent border font-philospher font-semibold rounded-md capitalize hover:bg-transparent hover:border hover:border-black hover:text-black transition-all'>submit</button>
                    </div>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Contact