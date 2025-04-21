import React, { useState } from 'react'

const DetailsSection = ({ content }) => {

}

const CategoryCard = ({
    image,
    content,
    style }) => {
    const [visible, setVisible] = useState(false);

    const imgCardStyle = `${style}`

    return (
        <div className="relative w-full" onMouseEnter={() => (setVisible(true))} onMouseLeave={() => (setVisible(false))}>
            <img src={image} className={`w-full object-cover ${imgCardStyle}`}
                alt="" srcset="" />

            {
                visible && 
                <section className={`absolute bottom-0 left-0 bg-white/75 text-black w-full h-[20%] 
                                flex flex-row justify-between items-center hover:cursor-pointer p-2`}>
                    <span>{content}</span>
                    <section className='flex flex-row gap-1 items-center'>
                        <span className='hover:underline '>Explore now </span>
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </section>
                </section>
            }

        </div>
    )
}

export default CategoryCard