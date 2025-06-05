import React from 'react'

const ProductColor = ({ colors, availableColors }) => {

    const currentColor = availableColors !== 0 ? availableColors[0] : '#000';

    // const colors = ["#ff5733", "#3498db", "#8e44ad"]

    const pdtColorStyle = 'h-full aspect-square rounded-full'
    return (
        <section className="flex flex-col items-start gap-2">
            <span className="text-sm md:text-base text-gray-600 font-medium">Color</span>

            <div className="flex flex-row items-center justify-start gap-3">
                {availableColors &&
                    availableColors.map((color) => {
                        const isSelected = currentColor === color;

                        return (
                            <div
                                key={color}
                                onClick={() => handleColorSelect?.(color)}
                                className={`relative w-6 h-6 md:w-7 md:h-7 rounded-full cursor-pointer transition-all
              ${isSelected ? 'ring-2 ring-black' : 'ring-1 ring-gray-300 hover:ring-black'}`}
                                style={{ backgroundColor: color }}
                            >
                                {/* Optional checkmark or border when selected */}
                                {isSelected && (
                                    <div className="absolute inset-0 rounded-full border-[2px] border-white pointer-events-none"></div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </section>

    )
}

export default ProductColor