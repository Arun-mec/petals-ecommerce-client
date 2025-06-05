import React from 'react'
import Cart from '../../components/cart/Cart'
import Footer from '../../components/layout/footer/Footer'
import Header from '../../components/layout/header/Header'
import Payment from '../../components/cart/Payment'

const PaymentPage = () => {
  return (
    <>
        <Header />
        <Payment />
        <Footer />
    </>
  )
}

export default PaymentPage