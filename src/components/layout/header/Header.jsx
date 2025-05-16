import React from 'react'
import Navbar from '../navbar/Navbar'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div
            className="relative z-[50] w-full bg-cover bg-center items-center justify-center" >
            <Navbar />
        </div>
    )
}

export default Header