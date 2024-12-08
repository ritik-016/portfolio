import React from 'react'
import TextChanger from './TextChanger'
import HomeImg from "../assets/Untitled_design-removebg-preview.png"

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChanger /></h1>
        <p className='text-sm md:text-[20px] pt-4 tracking-tight'>I'm a self-driven Frontend Developer and proficient in building responsive web designs and a good understanding in code reviewing and communication skills.</p>
        <a href="#contact"><button className='mt-5 md:m-10 text-white py-2 px-3 text-sm ms:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scal-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button></a>
        </div>
        <div><img className='w-72' src={HomeImg} alt="" /></div>
    </div>
  )
}

export default Home
