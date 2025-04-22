import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ImageCard = ({
    image,
    content,
    style
}) => {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const imgCardStyle = `${style}`
    return (
        <div className="relative w-full text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
        >
            <img src={image} className={`w-full object-cover ${imgCardStyle}`} alt="" srcset="" />
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className='absolute top-0 left-0 w-full h-full bg-white/25'>
            </motion.div>
            <section className={`absolute bottom-4 left-4 z-[10] flex flex-row 
                    justify-between p-2 cursor-pointer ${hover && 'animate-wiggle'}`}>
                <span>{content}</span>
                <span class="material-symbols-outlined">arrow_forward</span>
            </section>
        </div>
    )
}

export default ImageCard