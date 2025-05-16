import React from 'react'

const ProductColor = ({colors, availableColors}) => {

    console.log(colors);
    
    const currentColor = availableColors !== 0 ? availableColors[0] : '#000'; 

    // const colors = ["#ff5733", "#3498db", "#8e44ad"]

    const pdtColorStyle = 'h-full aspect-square rounded-full'
  return (
    <section className='flex flex-col items-start justify-center gap-1'>
        {/* <span className="text-md md:text-lg">Product Color</span> */}
        <span className="text-sm md:text-md text-gray-500">Color</span>
        <div className='flex flex-row items-center h-6 justify-center gap-2 md:gap-4'>
            {
                availableColors && 
                availableColors.map((color)=> {
                    return (
                        currentColor===color ? <div className="h-full aspect-square p-[0.1rem] border-[0.1rem] border-black inline-block rounded-full">
                            <span className={`${pdtColorStyle}`} style={{backgroundColor:color}}></span> 
                        </div> :
                        <span className={`${pdtColorStyle}`} style={{backgroundColor:color}}></span> 
                    )
                })
            }
            
        </div>
    </section>
  )
}

export default ProductColor