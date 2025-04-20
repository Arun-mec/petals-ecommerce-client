import React from 'react'

const ImageCard = ({
    image,
    content
}) => {
  return (
    <div className='relative w-full text-white'>
        <img src={image} className="h-[36rem] lg:h-[25rem] w-full object-cover" alt="" srcset="" />
        <span className='absolute bottom-4 left-4'>{content}</span>
    </div>
  )
}

export default ImageCard