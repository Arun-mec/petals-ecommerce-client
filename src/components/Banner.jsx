import React from 'react'
import Navbar from './Navbar'
import SearchBox from './SearchBox'

const Banner = () => {
  const titleStyle = `text-5xl font-semibold leading-16`
  const subTitleStyle = `text-md`
  return (
    <section
      className="relative w-full h-[100rem] lg:h-[100vh] bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage:  `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/images/banner.jpg')`,
    }}>

    <Navbar />

    <div className='absolute inset-0 w-[100vw] lg:w-2/3 text-white flex flex-col justify-center items-center gap-4'>
      <section className={`flex flex-col items-center ${titleStyle}`}>
        <span>Crafting Comfort, Redefining Spaces.</span>
        <span>Your Home, Your Signature Style!</span>
      </section>
     
      <span className={subTitleStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      <SearchBox />
    </div>
  </section>
  
  )
}

export default Banner

// 