import aboutImg from '../assets/about.jpg'
import {ABOUT_TEXT} from '../constants/index.js'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'> 
      <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:0.5}} className="flex items-center justify-center">
                <img src={aboutImg} alt="About" className="w-80 rounded-2xl" />
            </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
            <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:0.5}} className='flex justify-center lg:justify-start'>
                <p className='my-2 py-6 max-w-xl'>{ABOUT_TEXT}</p>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
