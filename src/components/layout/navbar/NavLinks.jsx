import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ style }) => {

    const { auth } = useSelector((state) => state.auth);
    const nbarItemStyle = `cursor-pointer hover:underline p-2 ${style}`
    return (
        <>
            {
                (auth && auth.isAdmin) ?
                    <>
                        <NavLink to="/admin" className={nbarItemStyle}>Home</NavLink>
                        <NavLink to="/admin/products" className={nbarItemStyle}>Products</NavLink>
                        <NavLink to="/admin/users" className={nbarItemStyle}>Users</NavLink>
                        <NavLink to="/admin/orders" className={nbarItemStyle}>Orders</NavLink>
                    </> :
                    <>
                        <NavLink to="/" className={nbarItemStyle}>Home</NavLink>
                        <NavLink to="/products" className={nbarItemStyle}>New Arrivals</NavLink>
                        <NavLink to="/products" className={nbarItemStyle}>Categories</NavLink>
                        <NavLink to="/products" className={nbarItemStyle}>Journel</NavLink>

                    </>
            }
        </>

    )
}
export default NavLinks