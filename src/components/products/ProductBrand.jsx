import React from 'react'

const ProductBrand = ({product}) => {
    
  return (
    <div className='flex flex-col items-start justify-start gap-1 md:gap-2 text-gray-600 text-xs md:text-sm'>
        <span>Brand : {product.brandDetails.name}</span>
        <span>Origin : {product.brandDetails.origin}</span>
        <span>Desc : {product.brandDetails.description}</span>
    </div>
  )
}

export default ProductBrand