import React, { useState } from 'react'
import Logo from './Logo'
import NavDrawer from './NavDrawer'
import UserLinks from './UserLinks'
import NavLinks from './NavLinks'

const Navbar = () => {

    const isHome = location.pathname === "/";
    const [isDrawOpen, setIsDrawOpen] = useState(false)

    const toggleDrawer = () => {
        setIsDrawOpen(!isDrawOpen)
    }

    return (
        <>
            {/* Desktop view  */}
            <section
                className={`${isHome ? 'bg-black/20' : 'bg-black/50'} w-full h-16 fixed top-0 left-0 hidden lg:flex flex-row 
                                    items-center justify-evenly z-[25] 
                                    text-white text-md font-sans px-10 animate-fadein`}>
                <div className="flex flex-row items-center justify-center">
                    <Logo />
                </div>
                <nav className="flex flex-row gap-10">
                    <NavLinks />
                </nav>
                <nav>
                    <UserLinks style="text-white" />
                </nav>
            </section>


            {/* Mobile view  */}
            <section className="w-full h-16 fixed lg:hidden flex flex-row items-center justify-center z-[25]
                            bg-black/25 text-white text-md font-sans px-4">
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