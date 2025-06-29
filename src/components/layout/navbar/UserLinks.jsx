import { useState } from "react"
import { MdOutlineFavorite } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import LoginDropdown from "../../auth/LoginDropdown";
import { FaCircleUser } from "react-icons/fa6";

const UserLinks = ({ style }) => {

    const location = useLocation();
    const navigate = useNavigate();
    
    const { auth } = useSelector((state) => state.auth)

    const isCart = location.pathname === "/cart"
    const isLogin = location.pathname === "/login"

    const { cartItems } = useSelector((state) => state.cart)
    const linkStyle = `${style} hidden md:flex flex-row justify-center items-center gap-4`
    const linkSmStyle = `${style} flex md:hidden flex-row justify-center items-center gap-4`


    const handleLoginClick = () => {
        if (auth) {
            navigate('/profile')
        }
        else {
            navigate('/login')
        }
    }

    return (
        <>
            <div className={`${linkStyle}`}>
                {/* <MdOutlineFavorite className="text-xl md:text-2xl"/> */}
                {!isLogin && <LoginDropdown />}
                {!isCart && !auth.isAdmin && 
                    <section onClick={() => navigate('/cart')} className="flex flex-row gap-1 items-start justify-center">
                        <RiShoppingBagFill className="text-xl md:text-2xl" />
                        <span className="bg-white text-black rounded-[50%] w-6 h-6 flex justify-center">{cartItems.length ? cartItems.length : 0}</span>
                    </section>
                }
            </div>
                
            <div className={`${linkSmStyle}`}>
                <MdOutlineFavorite className="text-xl md:text-2xl" />

                {!isCart &&
                    <section onClick={() => navigate('/cart')} className="flex flex-row gap-1 items-start justify-center">
                        <RiShoppingBagFill className="text-xl md:text-2xl" />
                        <span className="bg-white text-black rounded-[50%] w-6 h-6 flex justify-center">{cartItems.length ? cartItems.length : 0}</span>
                    </section>
                }

                <section className="flex flex-row gap-1 items-start justify-center">
                    <FaCircleUser onClick={handleLoginClick} className="text-xl md:text-2xl" />
                </section>
            </div>
        </>
    )
}

export default UserLinks;