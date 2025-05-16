import React from 'react'
import FilterButton from '../ui/FilterButton'


const ProductListingTitle = () => {
  const buttonTitles = ["Sweaters", "Coats","Monsoon","Winter","Summer"]
  return (
    <div 
        className="w-full flex flex-col items-start gap-6 md:gap-8 
        border-b-[.1rem] border-b-gray-200 py-2 md:py-4 lg:py-6">
        <span className='text-lg md:text-xl'>shop</span>
        <section className='w-full flex flex-row items-center justify-betweeen'>
          <div className='w-full flex flex-row items-center justify-betweeen gap-1 md:gap-2'>
            {
              buttonTitles.map((buttonTitle) => {
                return (
                  <FilterButton content={buttonTitle} style="p-1 md:px-2 border-[.1rem] rounded-4xl border-black bg-white text-black hover:text-white text-md" />
                )
              })
            }
          </div>
          
        </section>
    </div>
  )
}

export default ProductListingTitle