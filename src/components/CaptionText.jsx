import React from 'react'

const CaptionText = ({style}) => {
    const buttonStyle = `text-xl lg:text-2xl`;
  return (
    <div className='smcontainer lg:container flex flex-col my-6 gap-2'>
        <span className={buttonStyle}>Elevate your lifestyle with a more intelligent, superior wardrobe.</span>
        <span className={buttonStyle}>Our range is crafted sustainably with longevity in mind.</span>
    </div>
  )
}

export default CaptionText