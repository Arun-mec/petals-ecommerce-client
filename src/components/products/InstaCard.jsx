import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InstaCard = ({
    image, 
    link
}) => {
  return (
    <div className='relative w-full'>
        <img src={image} 
            className="w-full aspect-square object-cover" alt="" />
        <motion.div 
            initial={{opacity:0}}
            whileHover={{opacity:1}}
            whileTap={{opacity:1}}
            className='absolute top-0 left-0 w-full h-full
             bg-black/40 flex justify-center items-center cursor'>
            <Link to={link} ><IoLogoInstagram className='text-white/50 text-xl lg:text-4xl'/></Link>
        </motion.div>
    </div>
  )
}

export default InstaCard