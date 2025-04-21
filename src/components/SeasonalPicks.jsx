import React from 'react'
import ProductCard from './ProductCard'

const Title = ({ title }) => {
    return (
        <span className='text-xl lg:text-2xl'>{title}</span>
    )
}

const SeasonalPicks = () => {

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
        <div className="smcontainer lg:container my-6 flex flex-col gap-6">
            <Title title="What to Wear Now" />

            <section className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto py-2 scroll-smooth">
                {seasonalProducts.map((product, i) => (
                    <div key={i} className="min-w-[200px] lg:min-w-0 flex-shrink-0">
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

export default SeasonalPicks