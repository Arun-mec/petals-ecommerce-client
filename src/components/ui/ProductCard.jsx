import React, { useState } from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Link, useLocation, useParams } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({
    id,
    image,
    name,
    price,
    rating,
    numReviews,
    like = true
    }) => {

    console.log(like)
    const location = useLocation();
    const isProducts = location === '/products'
    

    const handleMouseEnter = () => {
        setShow(true)
    }
    const handleMouseLeave = () => {
        setShow(false)
    }
    return (
        <Link to={`/products/${id}`}>
            <div className='w-full relative min-w-[200px] lg:min-w-0 
                    flex flex-col gap-2 items-center cursor-pointer
                    border-[0.1rem] border-gray-100 hover:border-gray-200 p-1 md:p-2'
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={image} className='relative h-full aspect-[3/4] object-cover' />
                {
                    like ? <MdFavorite className="cursor-pointer absolute top-4 right-4 z-[10] text-red-400" /> : 
                    <MdFavoriteBorder className="cursor-pointer absolute top-4 right-4 z-[10] text-gray-400" /> 
                }
                {/* <span class={`${like ? 'bg-red-500' : 'bg-none'}material-symbols-outlined  text-gray-400`}
                    onClick={handleLike} style={{fontSize:'1.25rem'}}>
                    favorite
                </span> */}
                <section className='w-full flex flex-col items-start justify-center'>
                    <span className='text-sm lg:text-md'>{name}</span>
                    <section className='w-full flex flex-row items-center justify-between'>
                        <span className='text-sm lg:text-md'>$ {price}</span>
                        <Rating rating={rating} numReviews={numReviews} />
                    </section>
                </section>
            </div>
        </Link>
    )
}

export default ProductCard