import React from 'react'

const ProductPrice = ({price, prevPrice, discount}) => {
  return (
    <div className='flex flex-col items-start justify-center gap=1'>
        <div className='flex flex-row items-start justify-center gap-2 md:gap-4'>
            <span className='text-2xl md:text-4xl text-red-600'>{discount}%</span>
            <span className='text-2xl md:text-4xl'>${price}</span>
        </div>
        <span className='text-sm md:text-md text-gray-500'>MRP : <span className='line-through'>{price}</span></span>
    </div>
  )
}

export default ProductPrice