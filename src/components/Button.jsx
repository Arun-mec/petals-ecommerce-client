import React from 'react'

const Button = ({content}) => {
  return (
   <button className='max-w-fit p-1 border-[.1rem] border-black text-black text-sm'>
        {content}
   </button>
  )
}

export default Button