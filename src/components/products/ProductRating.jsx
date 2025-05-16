import React from 'react'
import Rating from '../ui/Rating';

const ProductRating = () => {
    const currentRating = 3.4;
  return (
     <section className='flex flex-col items-start justify-center gap-1'>
        {/* <span className="text-md md:text-lg">Product Color</span> */}
        <span className="text-sm md:text-md text-gray-500">Rating</span>
        <Rating rating={currentRating} style="text-lg md:text-xl" />
    </section>
  )
}

export default ProductRating