import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import UserLinks from './UserLinks'

const NavDrawer = ({
    toggleDrawer }) => {
    return (
        <nav className="max-w-[20rem] h-full lg:hidden flex flex-col items-start
                    gap-5 p-2 py-4 relative left-0 top-0 z-[30] bg-white">
            <section className="w-full flex flex-row justify-end items-center">
                <span className='text-gray-500' onClick={toggleDrawer}>close</span>
            </section>
            <section className="w-full bg-gray-100 flex flex-row justify-between items-center 
                            rounded-md border-[0.1rem] border-gray-200 p-1">
                <Logo />
            </section>
            <section className="w-full flex flex-col justify-start gap-2">
                <NavLinks style='focus:bg-gray-200 focus:rounded-md' />
            </section>
        </nav>
    )
}
export default NavDrawer