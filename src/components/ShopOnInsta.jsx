import React from 'react'
import InstaCard from './InstaCard'
import { motion } from 'framer-motion'


const Title = ({ title }) => {
    return (
        <span className='text-xl lg:text-2xl'>{title}</span>
    )
}

const ShopOnInsta = () => {

    const instaImages = [
        {
            image: '/images/image_6.jpg',
            link: ""
        },
        {
            image: '/images/image_7.jpg',
            link: ""
        },
        {
            image: '/images/image_8.jpg',
            link: ""
        },
        {
            image: '/images/image_9.jpg',
            link: ""
        },
        {
            image: '/images/image_10.jpg',
            link: ""
        },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center gap-2'>
            <Title title="Shop On Instagram" />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-2 py-4'>
                {
                    instaImages.map((instaImage, key) => {
                        return (
                            <div className={`${key < 2 ? 'block' : key < 3 ? 'hidden md:block' : 'hidden lg:block'}`}>
                                <InstaCard image={instaImage.image} link={instaImage.link} />
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default ShopOnInsta