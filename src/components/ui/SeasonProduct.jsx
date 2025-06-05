import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const SeasonProduct = ({
    image,
    name,
    price,
    like
}) => {

    const handleMouseEnter = () => {
        setShow(true)
    }
    const handleMouseLeave = () => {
        setShow(false)
    }
    return (
        <div
          className='relative w-full min-w-[200px] lg:min-w-0 
           flex flex-col gap-2 items-start cursor-pointer
           shadow-sm hover:shadow-md hover:bg-gray-50 
           p-1 h-[300px] lg:h-[320px] bg-white rounded'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-full h-[75%]">
                <img
                    src={image}
                    className='absolute inset-0 w-full h-full object-cover rounded'
                    alt={name}
                />
                {like ? (
                    <MdFavorite className="cursor-pointer absolute top-2 right-2 z-[10] text-red-400" />
                ) : (
                    <MdFavoriteBorder className="cursor-pointer absolute top-2 right-2 z-[10] text-gray-400" />
                )}
            </div>

            <div className="w-full flex flex-col justify-between h-[25%]">
                <span className='text-sm lg:text-md truncate'>{name}</span>
                <span className='text-sm lg:text-md'>$ {price}</span>
            </div>
        </div>

    )
}

export default SeasonProduct