import React from 'react'
import ProductListingTitle from './ProductListingTitle'
import ProductCard from '../ui/ProductCard'

const ProductListing = () => {
  const seasonalProducts = [
        {
            image: '/images/image_5.jpg',
            name: 'Classy Easy Zipper Tote',
            price: 1280
        },
        {
            image: '/images/image_4.jpg',
            name: 'Concertina Phone Bag',
            price: 1100
        },
        {
            image: '/images/image_3.jpg',
            name: 'Wool Mermeshene Sweater Coat',
            price: 1300
        },
        {
            image: '/images/image_2.jpg',
            name: 'Single Origin Cashmere Cap',
            price: 980
        },
        {
            image: '/images/image_1.jpg',
            name: 'Alpeca Cool Wollen Cardigon',
            price: 1500
        }
    ]
  return (
    <div 
        className="w-full min-h-[60vh]">
        <ProductListingTitle />
        <section className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {seasonalProducts.map((product, i) => (
                    <div key={i} className="min-w-[200px] lg:min-w-0 flex items-center justify-center flex-shrink-0">
                        <ProductCard
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    </div>
                ))}
        </section>
    </div>
  )
}

export default ProductListing