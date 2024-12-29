import {EXPERIENCES} from '../constants/index.js';
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <p className='text-sm text-neutral-400 mb-2'>{experience.year}</p>
                </motion.div>
                <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}} className='w-full lg:w-3/4 max-w-xl'>
                    <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-purple-100 text-sm'>{experience.company}</span></h6>
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>
                    {experience.technologies.map((tech, idx)=>(
                        <span key={idx} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
