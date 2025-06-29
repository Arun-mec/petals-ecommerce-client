import React, { useState } from 'react'

const ProductColor = ({ colors, availableColors }) => {

    const currentColor = availableColors !== 0 ? availableColors[0] : '#000';
    const [selectedColor, setSelectedColor] = useState("");

    // const colors = ["#ff5733", "#3498db", "#8e44ad"]

    const handleColorClick = (currColor) => {
        if (selectedColor!==currColor && availableColors.includes(currColor)) {
            setSelectedColor(currColor);
        }
    } 

    const pdtColorStyle = 'h-full aspect-square rounded-full'
    return (
        <section className="flex flex-col items-start gap-2">
            <span className="text-sm md:text-base text-gray-600 font-medium">Color</span>

            <div className="flex flex-wrap gap-2 mt-2 rounded">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        title={color}
                        onClick={() => handleColorClick(color)}
                        className={`border-[1px] ${availableColors.includes(color) ? 'border-black' : 'border-none'} 
                                ${selectedColor===color && 'bg-gray-300'}
                            w-10 h-10 rounded flex items-center justify-center`}>
                        <div
                            className="w-8 h-8 rounded-[50%]"
                            style={{ backgroundColor: color }}
                        ></div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default ProductColor