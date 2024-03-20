import React from 'react'
import Container from '../Container'
import SubHeading from './../SubHeading';
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssThin } from "react-icons/pi";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbBrandFirebase } from "react-icons/tb";
import Card from '../Card';

const Skills = () => {
  return (
    <>
    <div className='p-2.5'>
        <Container>
            <SubHeading title='Skills' className='text-center sm:py-12 pb-7 '/>
            <div className='flex flex-wrap gap-x-5 sm:justify-center gap-y-2'>
                <Card title= 'html' item='Hypertext markup Language '>
                    <TiHtml5 className='text-[20px] text-[#FC6736] inline-block' />
                </Card>
                <Card title= 'css' item='modern css , flexbox, grid, sass with resonsive layout'>
                    <PiFileCssThin className='text-[20px] text-[#50C4ED] inline-block' />
                </Card>
                <Card title= 'js' item='works with Raw js, modern es6 features'>
                    <DiJavascript1 className='text-[20px] text-[#FFC54D] inline-block' />
                </Card>
                <Card title= 'react' item='raw react js, hooks, states, rendering, props passing, conditional renderning'>
                    <FaReact className='text-[20px] text-[#50C4ED] inline-block' />
                </Card>
                <Card title= 'Next js' item='basic (frontend)'>
                    <TbBrandNextjs className='text-[20px] text-black inline-block' />
                </Card>
                <Card title= 'tailwind' item='modern css framework , works with various css, flex, grid , customize css using tailwind '>
                    <BiLogoTailwindCss className='text-[20px] text-[#50C4ED] inline-block' />
                </Card>
                <Card title= 'bootstrap' item='works with bootstrap , flex, grid, responsive deisign'>
                <FaBootstrap className='text-[20px] text-[#50C4ED] inline-block' />
                </Card>
                <Card title= 'Materialize' item='use different components as card, navbar, modal etc'>
                    <SiMui className='text-[20px] text-[#50C4ED] inline-block' />  
                </Card>
                <Card title= 'Ant design' item='react ui libraray, uses different components'>
                    <AiOutlineAntDesign className='text-[20px] text-[#50C4ED] inline-block' />
                </Card>
                <Card title= 'Shadcn' item='ui design for react js different components as card, navbar, modal etc'>
                    <BiLogoTailwindCss className='text-[20px] text-[#50C4ED] inline-block' />  
                </Card>
                <Card title= 'firebase' item='realtime, storage, authentications'>
                    <TbBrandFirebase className='text-[20px] text-[#50C4ED] inline-block' />
                </Card> 
            </div>
            

        </Container>
    </div>
    </>
  )
}

export default Skills