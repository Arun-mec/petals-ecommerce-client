import React from 'react'
import Rating from '../ui/Rating';

const ProductRating = ({ rating }) => {
  return (
    <section className="flex flex-col items-start gap-2">
      <span className="text-sm md:text-base text-gray-600">Rating</span>
      <Rating rating={rating} style="text-lg md:text-xl text-yellow-500" />
    </section>

  )
}

export default ProductRating