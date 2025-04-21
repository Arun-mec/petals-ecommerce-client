import React from 'react'

const ImageCard = ({
    image,
    content,
    style
}) => {

    const imgCardStyle = `${style}`
  return (
    <div className="relative w-full text-white">
        <img src={image} className={`w-full object-cover ${imgCardStyle}`} alt="" srcset="" />
        <span className='absolute bottom-4 left-4'>{content}</span>
    </div>
  )
}

export default ImageCard