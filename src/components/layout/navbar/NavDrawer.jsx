import React from 'react'
import Logo from '../logo/Logo'
import NavLinks from './NavLinks'
import { motion } from 'framer-motion'
import { RxCross2 } from 'react-icons/rx'

const NavDrawer = ({
    toggleDrawer }) => {
    return (
        <motion.div
            initial={{ x: "-10%" }}
            whileInView={{ x: 0 }}
            className="fixed top-0 left-0 w-[18em] h-[100vh] max-w-[20rem] lg:hidden flex flex-col items-start
                    gap-5 p-2 py-4 z-[76] bg-white">
            <section className="w-full bg-gray-100 flex flex-row justify-between items-center 
                            rounded-md border-[0.1rem] border-gray-100 p-1">
                <Logo />
                <RxCross2 onClick={toggleDrawer} className="text-xl md:text-2xl text-gray-600" />
            </section>
            <section className="w-full flex flex-col justify-start gap-2">
                <NavLinks style='focus:bg-gray-200 focus:rounded-md' />
            </section>
            
        </motion.div>
    )
}
export default NavDrawer