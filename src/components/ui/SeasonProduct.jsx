import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const SeasonProduct  = ({
    image,
    name,
    price,
    like
    }) => {

    
    const location = useLocation();
    const isProducts = location === '/products'


    const handleMouseEnter = () => {
        setShow(true)
    }
    const handleMouseLeave = () => {
        setShow(false)
    }
    return (
       <div className='relative min-w-[200px] lg:min-w-0 
                       flex flex-col gap-2 items-start cursor-pointer
                       border-[0.1rem] border-white hover:border-gray-100 p-1'
                   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                   <img src={image} className='relative h-full aspect-[3/4] object-cover' />
                   {
                       like ? <MdFavorite  className="cursor-pointer absolute top-4 right-4 z-[10] text-red-400" /> : 
                       <MdFavoriteBorder className="cursor-pointer absolute top-4 right-4 z-[10] text-gray-400" /> 
                   }
            <span className='text-sm lg:text-md'>{name}</span>
            <span className='text-sm lg:text-md'>$ {price}</span>
        </div>
    )
}

export default SeasonProduct