import React from 'react'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'

const Rating = ({ rating, numReviews, style }) => {
    const ratingCls = `${style} text-yellow-500`
    return (
        <div className='flex flex-row items-center justify-center'>
            {rating > 0 ? rating < 0.5 ? <IoMdStarHalf className={ratingCls} /> : <IoMdStar className={ratingCls} /> : <IoMdStarOutline className={ratingCls} />}
            {rating > 1 ? rating < 1.5 ? <IoMdStarHalf className={ratingCls} /> : <IoMdStar className={ratingCls} /> : <IoMdStarOutline className={ratingCls} />}
            {rating > 2 ? rating < 2.5 ? <IoMdStarHalf className={ratingCls} /> : <IoMdStar className={ratingCls} /> : <IoMdStarOutline className={ratingCls} />}
            {rating > 3 ? rating < 3.5 ? <IoMdStarHalf className={ratingCls} /> : <IoMdStar className={ratingCls} /> : <IoMdStarOutline className={ratingCls} />}
            {rating > 4 ? rating < 4.5 ? <IoMdStarHalf className={ratingCls} /> : <IoMdStar className={ratingCls} /> : <IoMdStarOutline className={ratingCls} />}
        </div>
    )
}

export default Rating