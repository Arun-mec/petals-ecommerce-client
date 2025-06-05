import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({name}) => {
    const [isVisible, setIsvisible] = useState(false);

  return (
    <div className="max-w-fit lg:w-72 flex flex-row items-center p-2 bg-white/25
        border-1 border-white border-opacity-10 rounded-4xl">
        <input type="text" className='outline-none w-72' name={name} id=""  />
        <FaSearch className="text-xl md:text-2xl bg-white text-black hover:bg-gray-200
                  rounded-[50%] p-1 cursor-pointer"/>
    </div>
  )
}

export default SearchBox