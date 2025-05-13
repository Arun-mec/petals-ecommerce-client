import React from 'react'
import Navbar from '../navbar/Navbar'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full bg-cover bg-center items-center justify-center" >
            <Navbar />
        </motion.div>
    )
}

export default Header