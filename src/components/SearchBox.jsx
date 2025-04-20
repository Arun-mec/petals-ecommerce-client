import React, { useState } from 'react'

const SearchBox = ({name}) => {
    const [isVisible, setIsvisible] = useState(false);

  return (
    <div className="max-w-fit lg:w-72 flex flex-row items-center p-2 bg-white/25
        border-1 border-white border-opacity-10 rounded-4xl">
        <input type="text" className='outline-none w-72' name={name} id=""  />
        <span class="material-symbols-outlined bg-white text-black 
                  rounded-4xl p-1 cursor-pointer" style={{fontSize : '1rem'}}>search</span>
    </div>
  )
}

export default SearchBox