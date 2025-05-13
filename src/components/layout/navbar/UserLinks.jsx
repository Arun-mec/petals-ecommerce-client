import React from 'react'
import { Link } from 'react-router-dom'

const UserLinks = ({ style }) => {
    const linkStyle = `${style}`
    return (
        <div className={`${linkStyle} flex justify-center items-center gap-6`}>
            <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '24px' }}>favorite</span> 
            <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '24px' }}>shopping_bag</span>
            <section className='flex flex-row gap-1'>
                <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '24px' }}>account_circle</span>
            </section>
        </div>
    )   
}

export default UserLinks


{/* < span className = 'flex flex-row justify-center items-center gap-1' >
            <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '24px' }}>favorite</span>
            <span>10</span>
        </span >
<span className='flex flex-row justify-center items-center gap-1'>
    <span className="material-symbols-outlined cursor-pointer" style={{ fontSize: '24px' }}>shopping_bag</span>
    <span>10</span>
</span> */}