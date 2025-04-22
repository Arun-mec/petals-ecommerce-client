import React from 'react'
import ImageCard from './ImageCard'

const promoData = [
    {
        text : 'New Arrivals',
        image : '/images/featured_1.jpg'
    },
    {
        text : 'The Casual Edit',
        image : '/images/featured_4.jpg'
    },
    {
        text : 'Best Sellers',
        image : '/images/featured_3.jpg'
    }
]

const cardStyle = 'h-[20rem] md:h-[26rem] lg:h-[28rem]'

const PromoCards = () => {
  return (
    <div className='smcontainer lg:container grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
            promoData.map((promo) => {
                return (
                    <ImageCard image={promo.image} content={promo.text} style={cardStyle}/>
                )
            })
        }
    </div>
  )
}

export default PromoCards