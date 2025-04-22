import React, { useState } from 'react'

const ProductCard = ({
    image,
    name,
    price
    }) => {

    const [like, setLike] = useState(false);
    const [show, setShow] = useState(false)

    const handleLike = () => {
        setLike(true);
    }

    const handleMouseEnter = () => {
        setShow(true)
    }
    const handleMouseLeave = () => {
        setShow(false)
    }
    return (
        <div className='relative h-84 min-w-[200px] lg:min-w-0 
                flex flex-col gap-2 items-start cursor-pointer
                border-[0.1rem] border-white hover:border-gray-100 p-1'
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={image} className='relative h-64 object-cover' />
            <span class="material-symbols-outlined cursor-pointer absolute top-4 right-4 z-[10] text-gray-400" 
                onClick={handleLike} style={{fontSize:'1.25rem'}}>
                favorite
            </span>
            <span className='text-sm lg:text-md'>{name}</span>
            <span className='text-sm lg:text-md'>$ {price}</span>
        </div>
    )
}

export default ProductCard