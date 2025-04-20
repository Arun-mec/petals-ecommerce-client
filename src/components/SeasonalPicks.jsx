import React from 'react'
import ProductCard from './ProductCard'

const Title = ({title}) => {
    return (
        <span className='text-xl lg:text-2xl'>{title}</span>
    )
}

const SeasonalPicks = () => {
  return (
    <div className='smcontainer lg:container carousel my-6 hidden lg:flex flex-col gap-6'>
        <Title title="What to Wear Now" />
        <section className="inline-flex flex-wrap lg:grid lg:grid-cols-5 gap-2 overflow-hidden">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
    </div>
  )
}

export default SeasonalPicks