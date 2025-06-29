import React, { useEffect, useState } from 'react'
import ProductListingTitle from './ProductListingTitle'
import ProductCard from '../ui/ProductCard'
// import { products } from './products'
import Breadcrumbs from '../ui/BreadCrumb'
import { useGetProductsQuery } from '../../slices/productsApiSlice'
import Loader from '../layout/loader/Loader'
import { BASE_URL } from '../../../constants'

const ProductListing = () => {

    const { data: products, isLoading, isError } = useGetProductsQuery();

    if (isLoading) return <div><Loader /></div>;

    if (isError) return <div>Products not found</div>

    return (

        <div
            className="smcontainter md:container min-h-[80vh] p-4 md:p-8 py-20 md:py-28">
            <Breadcrumbs />
            <ProductListingTitle />
            <section className="w-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {
                    products.map((product, i) => (
                        <ProductCard
                            id={product._id}
                            image={`${BASE_URL}${product.image}`}
                            name={product.name}
                            price={product.price}
                            like={product.like}
                            rating={product.rating}
                            noOfReviews={product.numReviews}
                        />
                    ))}
            </section>
        </div>
    )
}

export default ProductListing