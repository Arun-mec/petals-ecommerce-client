import React from 'react'
import Banner from '../../components/Banner'
import CaptionText from '../../components/CaptionText'
import PromoCards from '../../components/PromoCards'
import SeasonalPicks from '../../components/SeasonalPicks'
import Message from '../../components/Message'
import CategoryGrid from '../../components/CategoryGrid'
import ShopOnInsta from '../../components/ShopOnInsta'

const Homepage = () => {
  return (
    <div>
        <Banner />
        <CaptionText />
        <PromoCards />
        <SeasonalPicks />
        <CategoryGrid />
        <Message />
        <ShopOnInsta />
    </div>
  )
}

export default Homepage