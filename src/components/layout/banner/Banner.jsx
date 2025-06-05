import React from 'react'
import Navbar from '../navbar/Navbar'
import SearchBox from '../../ui/SearchBox'
import { motion } from 'framer-motion'

const Banner = () => {
  const titleStyle = `text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-8 md:leading-12`
  const subTitleStyle = `text-sm lg:text-lg`
  return (
    <div 
      className="relative w-full h-[50rem] lg:h-[95vh] bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url("/images/banner2.jpg")`,
    }}> 

    {/* <Navbar /> */}
    <div className='absolute w-full lg:container inset-0 text-white flex flex-col justify-center items-center gap-4'>
      <motion.section 
        initial={{y:"-100%"}}
        whileInView={{y:0}}
        className={`flex flex-col items-center ${titleStyle}`}>
        <span>Crafting Comfort, Redefining Spaces.</span>
        <span>Your Home, Your Signature Style!</span>
        <span className={subTitleStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      </motion.section>

      <SearchBox />
     
    </div>
  </div>
  
  )
}

export default Banner
