import React, { useState } from 'react';

export const SizeSelector = ({sizes, selectedSizes, setSelectedSizes}) => {

    const handleSizeClick = (selectedSize) => {
        if (!selectedSizes.includes(selectedSize)) {
            setSelectedSizes([...selectedSizes, selectedSize]);
        }
        else {
            selectedSizes = selectedSizes.filter((size) => {return size!=selectedSize})
            setSelectedSizes(selectedSizes);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
                {sizes.map((size, index) => (
                    <div
                        className={`border-[1px] ${selectedSizes.includes(size) ? 'border-black' : 'border-none'} w-10 h-10 rounded flex items-center justify-center`}
                        key={index}
                        onClick={() => handleSizeClick(size)}
                        >
                        <div className="w-8 h-8 bg-gray-200 rounded p-2 flex items-center justify-center cursor-pointer">{size}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}

const SizePicker = ({ sizes, setSizes }) => {

    // const [selectedColor, setSelectedColor] = useState('#000000');
    const sizeOptions = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

    const handleSizeClick = (selectedSize) => {
        if (!sizes.includes(selectedSize)) {
            setSizes([...sizes, selectedSize]);
        }
        else {
            sizes = sizes.filter((size) => {return size!=selectedSize})
            setSizes(sizes);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
                {sizeOptions.map((size, index) => (
                    <div
                        className={`border-[1px] ${sizes.includes(size) ? 'border-black' : 'border-none'} w-10 h-10 rounded flex items-center justify-center`}
                        key={index}
                        onClick={() => handleSizeClick(size)}
                        >
                        <div className="w-8 h-8 bg-gray-200 rounded p-2 flex items-center justify-center cursor-pointer">{size}</div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default SizePicker;
