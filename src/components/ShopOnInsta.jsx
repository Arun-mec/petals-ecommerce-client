import React from 'react'
import InstaCard from './InstaCard'
import { motion } from 'framer-motion'

const ShopOnInsta = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ duration: 0.8 }}>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-2 py-4'>
                <InstaCard />
                <InstaCard />
                <InstaCard />
                <InstaCard />
                <InstaCard />
            </div>
        </motion.div>
    )
}

export default ShopOnInsta