import React from 'react'
import Banner from '../../components/layout/banner/Banner'
import CaptionText from '../../components/category/CaptionText'
import PromoCards from '../../components/products/PromoCards'
import SeasonalPicks from '../../components/products/SeasonalPicks'
import CategoryGrid from '../../components/category/CategoryGrid'
import Message from '../../components/ui/Message'
import ShopOnInsta from '../../components/products/ShopOnInsta'
import Footer from '../../components/layout/footer/Footer'

const HomePage = () => {
  return (
    <>
        <Banner />
        <CaptionText />
        <PromoCards />
        <SeasonalPicks />
        <CategoryGrid />
        <Message />
        <ShopOnInsta />
        <Footer />
    </>
  )
}

export default HomePage
