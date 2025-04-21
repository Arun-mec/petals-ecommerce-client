import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryGrid = () => {
    const categories = [
        {
            name : 'Mens',
            image : '/images/men_category.jpg'
        },
        {
            name : 'Womens',
            image : '/images/women_category.jpg'
        },
        {
            name : 'Kids',
            image : '/images/kids_category.jpg'
        },
    ]
    const cardStyle = 'h-[25rem] lg:h-[20rem]'
  return (
    <div className='smcontainer lg:container grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4'>
        {
            categories.map((category) => {
                return (
                    <CategoryCard image={category.image} content={category.name} style={cardStyle}/>
                )
            })
        }
    </div>
  )
}

export default CategoryGrid