import React from 'react'
import {HERO_CONTENT} from '../constants/index.js'
import profile_pic from '../assets/professional_pic3.jpg'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
      <div className='flex flex-wrap'>
        <div className = "w-full lg:w-1/2">
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-16 font-thin text-6xl tracking-tight lg:mt-16 lg:text-8xl'>Shrey Desai</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">AI Engineer</span>
                <p className='my-2 tracking-tighter max-w-xl py-6 font-light'>{HERO_CONTENT}</p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <img src = {profile_pic} alt = 'Shrey Desai' className='w-80'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
