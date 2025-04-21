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
        <div className='relative min-w-[200px] lg:min-w-0 flex flex-col gap-2 items-start'
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={image} className='relative h-64' />
            <span class="material-symbols-outlined cursor-pointer absolute top-4 right-4 z-[10]" 
                onClick={handleLike} style={{fontSize:'1.25rem'}}>
                favorite
            </span>
            <span className='text-sm lg:text-md'>{name}</span>
            <span className='text-sm lg:text-md'>$ {price}</span>
        </div>
    )
}

export default ProductCard