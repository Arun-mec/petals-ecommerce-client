import React from 'react'
import Banner from '../../components/Banner'
import CaptionText from '../../components/CaptionText'
import PromoCards from '../../components/PromoCards'
import SeasonalPicks from '../../components/SeasonalPicks'
import Message from '../../components/Message'

const Homepage = () => {
  return (
    <div>
        <Banner />
        <CaptionText />
        <PromoCards />
        <SeasonalPicks />
        <Message />
    </div>
  )
}

export default Homepage