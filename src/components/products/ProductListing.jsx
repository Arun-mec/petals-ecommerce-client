import React from 'react'
import ProductListingTitle from './ProductListingTitle'
import ProductCard from '../ui/ProductCard'
import { products } from './products'
import Breadcrumbs from '../ui/BreadCrumb'

const ProductListing = () => {

    return (
        <div
            className="smcontainter container min-h-[80vh] p-2 md:p-4">
            <Breadcrumbs />
            <ProductListingTitle />
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2">
                {
                    products.map((product, i) => (
                        <div key={i} className="min-w-[200px] lg:min-w-0 flex items-center justify-center flex-shrink-0">
                            <ProductCard
                                id={product._id}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                like={product.like}
                                rating={product.rating}
                                noOfReviews={product.numReviews}
                            />
                        </div>
                        
                    ))}
            </section>
        </div>
    )
}

export default ProductListing