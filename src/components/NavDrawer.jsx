import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import { motion } from 'framer-motion'

const NavDrawer = ({
    toggleDrawer }) => {
    return (
        <motion.div
            initial={{ x: "-10%" }}
            whileInView={{ x: 0 }}

            className="fixed top-0 left-0 w-[18em] h-[100vh] max-w-[20rem] lg:hidden flex flex-col items-start
                    gap-5 p-2 py-4 z-[30] bg-white">
            <section className="w-full flex flex-row justify-end items-center">
                <span className='text-gray-500' onClick={toggleDrawer}>close</span>
            </section>
            <section className="w-full bg-gray-100 flex flex-row justify-between items-center 
                            rounded-md border-[0.1rem] border-gray-100 p-1">
                <Logo />
            </section>
            <section className="w-full flex flex-col justify-start gap-2">
                <NavLinks style='focus:bg-gray-200 focus:rounded-md' />
            </section>
        </motion.div>
    )
}
export default NavDrawer