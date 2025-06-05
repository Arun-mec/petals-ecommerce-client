import React from 'react'

const ProductSize = ({ availableSizes, sizes }) => {
    const currentSize = availableSizes ? availableSizes[0] : "MD";

    // const sizes = ["XS", "SM", "MD", "LG","XL","2XL"]
    // const availableSizes = ["MD", "LG","XL","2XL"]
    return (
        <section className="flex flex-col items-start justify-center gap-2">
            <span className="text-sm md:text-base text-gray-600">Size</span>

            <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {sizes.map((size) => {
                    const isSelected = currentSize === size;
                    const isAvailable = availableSizes.includes(size);

                    return (
                        <div
                            key={size}
                            onClick={() => isAvailable && handleSizeSelect(size)}
                            className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md border 
                                flex items-center justify-center cursor-pointer select-none transition-all
                                ${isSelected ? 'bg-black text-white border-black' : 'bg-white text-gray-600 border-gray-300'}
                                ${!isAvailable ? 'line-through text-gray-400 cursor-not-allowed opacity-50' : 'hover:border-black hover:text-black'}`}>
                            {size}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default ProductSize