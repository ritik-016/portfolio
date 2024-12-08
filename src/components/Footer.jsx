import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div className='flex items-center'>
            <h3 className='text-sm md:text-5xl font-bold'>Feel Free To Visit</h3>
        </div>
        <ul className='text-xs md:text-xl'>
            <li className='flex items-center gap-2'><MdOutlineEmail size={25}/>ad6360153@gamil.com</li>   
            <li className='flex items-center gap-2'><CiLinkedin size={27}/>linkedin.com/ritik-kumar</li>
            <li className='flex items-center gap-2'><FaGithub size={25}/>github.com/ritik-016</li>
        </ul>
    </div>
  )
}

export default Footer