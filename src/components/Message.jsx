import React from 'react'

const Title = ({title}) => {
    return (
        <span className='text-xl'>{title}</span>
    )
}

const Message = () => {
  return (
    <div className="bg-gray-100 my-10 lg:my-20">
        <div className='smcontainer lg:container p-12 lg:p-30 flex flex-col items-center justify-center text-center gap-10'>
            <Title title="The Art of Fewer, Better The Choices"/>
            <span>Opting for quality over quantity means selecting timeless, durable, and responsibly made items. This approach simplifies our lives and fosters a deeper appreciation for our surroundings. Emphasizing longevity and responsible production resonates with a more sustainable and mindful lifestyle.</span>
        </div>
    </div>
  )
}

export default Message