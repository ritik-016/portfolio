import React from "react";
import { DiFirebase } from "react-icons/di";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaF } from "react-icons/fa6";
import { SiSupabase } from "react-icons/si";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiFirebase color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSupabase color="#61DAFB" size={50} />
          </span>
          
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg py-4 px-8 items-center">
            <FaF color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Front-end Developer</h2>
              <p className="text-sm leading-tight font-thin">
                I'm a Fresher
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;