import React from 'react'
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import { motion } from 'framer-motion';

function SideBar() {
  return (
    <div className='w-14 border-r-[1px] h-screen fixed flex flex-col justify-around items-center'>
      <div className='flex flex-col gap-7 mb-10 text-[40px]'>
        <motion.div
        animate={{
          rotate: [0,90, 180, 270, 360],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          times: [0, 0.2, 0.5, 0.8, 1, 1.2],
          repeat: Infinity,
          repeatDelay: 0
        }}
        >
          <a href="https://github.com/tomalcock" 
        aria-label='to TLA github'><IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out my-12'/></a>
        </motion.div>

        <motion.div
        animate={{
          rotate: [360, 270, 180, 90, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          times: [0, 0.2, 0.5, 0.8, 1, 1.2],
          repeat: Infinity,
          repeatDelay: 0
        }}
        >
           <a href="https://www.linkedin.com/in/tom-lacy-alcock-b28b84283/"
        aria-label='to TLA linked in page'><IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
        </motion.div>
      </div>
    </div>
  )
}

export default SideBar

