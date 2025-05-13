import React, { useEffect, useRef, useState } from 'react'
import Logo from '../logo/Logo'
import NavDrawer from './NavDrawer'
import UserLinks from './UserLinks'
import NavLinks from './NavLinks'
import NavDropDown from './NavDropDown'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const isHome = location.pathname === "/";
    const [isDrawOpen, setIsDrawOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const toggleDrawer = () => {
        setIsDrawOpen(!isDrawOpen)
    }

    const handleMouseEnter = () => {
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        setIsVisible(false)
    }

    const getClass = () => {
        if (!isHome) return 'bg-gray-100 text-black';
        return isVisible ? 'bg-gray-100 text-black' : 'bg-black/25 text-white';
    };

    return (
        <>
            {/* Desktop view  */}
            <section
                className={`${getClass()} w-full h-16 sticky top-0 left-0 hidden lg:flex flex-row 
                                    items-center justify-evenly z-[50] text-md font-sans px-10 animate-fadein`}>
                {/* <div className="flex flex-row items-center justify-center">
                    <Logo />
                </div> */}
                <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="h-full flex flex-row items-center justify-baseline gap-10">
                    <Logo />
                    <NavLinks />
                </nav>
                <div className='flex flex-row items-center gap-1 md:gap-2'>
                    <UserLinks />
                    <Link to="/login"><span className='cursor-pointer hover:underline'>Login</span></Link>
                </div>
            </section>
            <NavDropDown isvisible={isVisible} setIsVisible={setIsVisible} />

            {/* Mobile view  */}
            <section className={`${getClass()} w-full h-16 sticky lg:hidden flex flex-row 
                items-center justify-center z-[50] text-md font-sans px-4`}>
                <nav className="w-full flex flex-row items-center justify-start gap-5">
                    <span className="material-symbols-outlined"
                        onClick={toggleDrawer}>menu</span>
                    <Logo />
                </nav>
                <UserLinks />
            </section>

            {isDrawOpen && <NavDrawer toggleDrawer={toggleDrawer} />}
        </>
    )
}

export default Navbar