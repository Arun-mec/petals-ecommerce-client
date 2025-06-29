import React from 'react'
import Header from '../../components/layout/header/Header'
import ProductList from '../../components/admin/ProductList'
import Footer from '../../components/layout/footer/Footer'

const AdminProductsPage = () => {
  return (
    <>
        <Header />
        <ProductList />
        <Footer />
    </>
  )
}

export default AdminProductsPage