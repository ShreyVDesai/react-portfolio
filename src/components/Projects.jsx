import {PROJECTS} from '../constants/index.js'; 
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <div className="pb-4 border-neutral-900 border-b">
      <motion.h2 whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project,index)=>(
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{x:0, opacity:1}} initial={{x:-100, opacity:0}} transition={{duration:1}} className='w-full lg:w-1/4'>
                <img src={project.image} alt={project.title} className='mb-6 rounded' width={150} height={150} />
            </motion.div>
            <motion.div whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}} className='w-full lg:w-3/4 max-w-xl'>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                {project.technologies.map((tech, idx) => (
                  <span index={idx} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900'>{tech}</span>
                    ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
