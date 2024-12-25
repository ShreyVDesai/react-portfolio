import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <FaPython className='text-7xl text-blue-400'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiScikitlearn className='text-7xl text-orange-400'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <TbSql className='text-7xl text-red-400'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiTensorflow className='text-7xl text-orange-400'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiPytorch className='text-7xl text-orange-700'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiHuggingface className='text-7xl text-yellow-400'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-800">
            <IoLogoNodejs className='text-7xl text-green-400'/>
        </div>

      </div>
    </div>
  )
}

export default Technologies
