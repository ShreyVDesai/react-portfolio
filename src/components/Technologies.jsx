import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import {motion} from'framer-motion';

const iconVariants = (duration) => ({
  initial:{ y:-10 },
  animate:{
    y: [-10,10],
    transition: {
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <FaPython className='text-7xl text-blue-400'/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiScikitlearn className='text-7xl text-orange-400'/>
        </motion.div>
        <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <TbSql className='text-7xl text-red-400'/>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiTensorflow className='text-7xl text-orange-400'/>
        </motion.div>
        <motion.div variants={iconVariants(6)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiPytorch className='text-7xl text-orange-700'/>
        </motion.div>
        <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <SiHuggingface className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div variants={iconVariants(5.5)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial='initial' animate='animate' className="rounded-2xl p-4 border-4 border-neutral-800">
            <IoLogoNodejs className='text-7xl text-green-400'/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
