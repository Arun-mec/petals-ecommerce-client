import React, { useState } from 'react';

export const ColorSelector = ({colors, selectedColors, setSelectedColors}) => {

    const handleColorClick = (currColor) => {
        if (!selectedColors.includes(currColor)) {
            setSelectedColors([...selectedColors, currColor]);
        }
        else {
            selectedColors = selectedColors.filter((color) => {return color!=currColor});
            setSelectedColors(selectedColors);
        }
    }

    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {colors.map((color, index) => (
                <div
                key={index}
                title={color}
                onClick={() => handleColorClick(color)}
                className={`border-[1px] ${selectedColors.includes(color) ? 'border-black' : 'border-none'} w-10 h-10 rounded flex items-center justify-center`}
                >
                <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: color }}  
                ></div>
                </div>

            ))}
        </div>
    )
}

const ColorPicker = ({ colors, setColors }) => {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleAddColor = (e) => {
        e.preventDefault();
        if (!colors.includes(selectedColor)) {
            setColors([...colors, selectedColor]);
        }
    };

    const handleColorClick = (color) => {
        if (colors.includes(color)) {
            colors = colors.filter((color) =>{ return color!==selectedColor});
            setColors(colors)
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
                <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="w-12 h-12 border rounded"
                />
                <button
                    onClick={(e) => handleAddColor(e)}
                    className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Add Color
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: color }}
                        title={color}
                        onClick={()=>handleColorClick(color)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorPicker;
