import React from 'react'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Flex from '../Flex'
import ServiceCard from '../ServiceCard'
import { FaCode } from 'react-icons/fa'
import { FaFigma } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { MdOutlineMail } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import { PiArrowsClockwiseThin } from "react-icons/pi";

const Services = () => {
  return (
    <div className='bg-[#fff]'>
        <Container>
           <SubHeading title='services' className='text-center py-[2rem] '/>
           <div className='text-center'>
               <p className='inline text-black md:text-sm text-[0.75rem] font-sans font-medium '>Providing best services for web designs</p>
           </div>
            <Flex className='flex flex-wrap gap-[2rem] justify-center py-[2rem] '>
                <ServiceCard title='html-css' description='creates static responsives designs'>
                    <FaCode className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
                <ServiceCard title='converts - figma Xd  psd pdf ' description='Converts any design or layout with pixel perfect , responsives'>
                    <FaFigma className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
                <ServiceCard title='html-react' description='converts into re-useable functional components, connects with api , data fetching or more '>
                    <FaReact className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
                <ServiceCard title='html-JavaScript' description='works with raw javasrcipt to better user experiences'>
                    <DiJavascript1 className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
                <ServiceCard title='email-tempaltes' description='creates static email-templates with inline css and various responsives designs'>
                    <MdOutlineMail className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
                <ServiceCard title='e-commerce' description='creates multivendor responsive layout using various css modern library'>
                    <PiArrowsClockwiseThin className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
                <ServiceCard title='html-bootstrap' description='creates responsive layout using various css modern library'>
                    <FaBootstrap className='sm:text-[20px] text-[18px] inline bg-secondary text-black w-[50px] h-[50px] rounded-[50%] p-2.5'/>
                </ServiceCard>
            </Flex>
        </Container>
    </div>
  )
}

export default Services