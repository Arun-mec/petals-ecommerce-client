import React from 'react'
import { motion } from 'framer-motion'

const FilterButton = ({content, style}) => {
    const buttonStyle = `${style} max-w-fit cursor-pointer`
    
    const buttonVariants = {
        initial: {},
        hover: {},
      };
      
      const fillVariants = {
        initial: { scaleX: 0 },
        hover: {
          scaleX: 1,
          transition: { duration: 0.8, ease: 'easeInOut' }
        }
      };
      
  return (
    <motion.button
    initial="initial"
    whileHover="hover"
    variants={buttonVariants}
    className={`${buttonStyle} relative overflow-hidden`}
  >
    <span className="relative z-10">{content}</span>
    <motion.span
      variants={fillVariants}
      className="absolute top-0 left-0 h-full w-full bg-black z-0 origin-left"
    />
  </motion.button>
  )
}

export default FilterButton