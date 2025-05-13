import React from 'react'
import ProductListing from '../../components/products/ProductListing'
import Header from '../../components/layout/header/Header'
import Footer from '../../components/layout/footer/Footer'

const ProductsPage = () => {
  return (
    <>
      <Header />
      <ProductListing />
      <Footer />
    </>
  )
}

export default ProductsPage