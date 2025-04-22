import React from 'react'
import { motion } from 'framer-motion'
import { IoLogoInstagram } from "react-icons/io5";

const InstaCard = () => {
  return (
    <div className='relative'>
        <img src="/images/image_9.jpg" 
            className="h-36 md:h-48 lg:h-72 aspect-square object-cover" alt="" />
        <motion.div 
            initial={{opacity:0}}
            whileHover={{opacity:1}}
            whileTap={{opacity:1}}
            className='absolute top-0 left-0 w-full h-full
             bg-black/25 flex justify-center items-center cursor'>
            <IoLogoInstagram className='text-white/50 text-xl lg:text-2xl'/>
        </motion.div>
    </div>
  )
}

export default InstaCard