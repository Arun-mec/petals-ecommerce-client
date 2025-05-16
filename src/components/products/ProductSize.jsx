import React from 'react'

const ProductSize = ({availableSizes, sizes}) => {
    const currentSize = availableSizes ? availableSizes[0] : "MD";

    // const sizes = ["XS", "SM", "MD", "LG","XL","2XL"]
    // const availableSizes = ["MD", "LG","XL","2XL"]
  return (
    <section className='flex flex-col items-start justify-center gap-1'>
        {/* <span className="text-md md:text-lg">Product Color</span> */}
        <span className="text-sm md:text-md text-gray-500">Size</span>
        <div className='flex flex-row items-center h-6 md:h-8 lg:h-10 justify-center gap-2 md:gap-4'>

            {
                sizes.map((size)=> {
                    return (
                        <div className={`${currentSize===size ? 'border-black text-black' : 'border-gray-400 text-gray-400'} 
                            ${!availableSizes.includes(size) && 'line-through '}
                            h-full p-1 md:p-2 border-[0.1rem] hover:border-red text-sm md:text-md flex items-center justify-center cursor-pointer`}>
                           {size}
                        </div> 
                        
                    )
                })
            }
            
        </div>
    </section>
  )
}

export default ProductSize