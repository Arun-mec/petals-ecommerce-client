import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = ({style}) => {
    const nbarItemStyle = `cursor-pointer hover:underline p-2 ${style}`
    return (
        <>
            <NavLink to="/" className={nbarItemStyle}>Home</NavLink>
            <NavLink to="/products" className={nbarItemStyle}>New Arrivals</NavLink>
            <NavLink to="/products" className={nbarItemStyle}>Categories</NavLink>
            <NavLink to="/products" className={nbarItemStyle}>Journel</NavLink>
        </>   
    )
}
export default NavLinks