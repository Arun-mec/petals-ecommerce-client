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

    const location = useLocation();

    return (
        <Link to={`/products/${id}`}>
            <div className='relative w-full min-w-[200px] lg:min-w-0 flex flex-col gap-3 p-2 bg-white rounded-xl 
                shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group'>
                <div className="relative w-full aspect-[1] md:aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105'
                    />
                    {like ? (
                        <MdFavorite className="absolute top-3 right-3 text-red-500 text-xl" />
                    ) : (
                        <MdFavoriteBorder className="absolute top-3 right-3 text-gray-400 text-xl hover:text-red-400 transition-colors" />
                    )}
                </div>
                <div className='w-full flex flex-col justify-between flex-grow'>
                    <h3 className='text-sm md:text-md font-semibold text-gray-800 truncate'>{name}</h3>
                    <div className='flex justify-between items-center mt-1'>
                        <span className='text-sm font-medium text-gray-700'>$ {price}</span>
                        <Rating rating={rating} numReviews={numReviews} />
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default ProductCard