import React from "react";
import Estate from '../assets/Screenshot 2024-11-28 213622.png'
import Ecommerce from '../assets/Screenshot 2024-11-30 205737.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-3xl md:text-5xl text-white font-bold flex justify-center">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-12 justify-center">
        <div className="p-3 md:p-6 flex flex-col justify-center w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-3xl">
        <img className="p-3 rounded-[20px]" src={Ecommerce} alt="" />
        <h2 className="flex items-center justify-center font-bold text-2xl">Ecommerce</h2>
        <h3 className="mt-4 w-56 flex justify-center items-center pb-5">This project is made with some basic use of Html and CSS and with advance Javascript</h3>
        <a  href="https://ritik-016.github.io/E-commerce/" className="w-full" >
        <button className="md:mt-10 text-white py-2 px-3 w-full text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
             </a>
        </div>
        <div className="p-3 md:p-6 flex flex-col justify-center w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-3xl">
        <img className="p-3 rounded-[20px]" src={Estate} alt="" />
        <h2 className="flex items-center justify-center font-bold text-2xl">Real Estate</h2>
        <h3 className="mt-4 w-56 flex justify-center items-center pb-5">This project is made with some basic use of Html and CSS and with advance Javascript</h3>
             <a  href="https://real-estate-ritik.vercel.app/" className="w-full" >
        <button className="md:mt-10 text-white py-2 px-3 w-full text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
             </a>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;