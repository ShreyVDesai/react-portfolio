import React from 'react';
import logo from '../assets/finalShreyLogo.png';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';


const Navbar = () => {
  return (
    <div>
      <nav className = 'mb-20 flex items-center justify-between py-6'>
        <div className = 'flex flex-shrink-0 items-center'>
            <img src = {logo} alt = 'logo' className="mx-2 w-12" />
        </div>
        <div className='flex items-center justify-center m-8 gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaEnvelope />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
