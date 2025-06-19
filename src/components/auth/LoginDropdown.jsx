import React, { useState } from 'react'
import Button from '../ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaCircleUser } from 'react-icons/fa6';
import { MdOutlineFavorite } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi';
import { RiCoupon2Fill, RiLogoutBoxFill, RiUser3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../slices/userApiSlice';
import { setAuthCredentials } from '../../slices/authSlice';

const LoginDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isHome = location.pathname === '/';

    const { auth } = useSelector((state)=> state.auth);

    const [logout, { isLoading, error, data}] = useLogoutMutation();

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    const handleLoginClick = () => {
        if (auth)  {
            navigate('/profile')
        }
        else {
            navigate('/login')
        }
    }

    const handleLogoutClick = () => {
        const res = logout().unwrap()
        .then((res) => {
            dispatch(setAuthCredentials(null));
            setIsOpen(false);
            navigate('/');
        })
        .catch((err) => console.log(err))
        dispatch(logout);
    }

    return (
        <div className='flex flex-row items-center gap-2'>
            <div className="relative w-36 lg:w-48">
                
                {
                    auth ? (
                        <section className='flex flex-row items-center justify-start cursor-pointer text-md md:text-lg font-bold gap-1 md:gap-2'
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span>{auth.username}</span>
                            <FaChevronDown />
                        </section>
                    )  :
                    <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} content="Login" onClick={handleLoginClick}
                        style={`${isHome ? 'w-full border-[.1px] border-white bg-white text-black hover:text-black' : 'w-full border-[.1px] border-black bg-black text-white hover:text-black' } p-1 px-4 text-md`} />
                }
               

                {isOpen && (
                    <div className='absolute left-1/2 translate-x-[-50%] z-10 w-64'
                         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <ul className="mt-2 bg-white border border-gray-300 text-black"> 
                            {
                                !auth &&    
                                <li
                                    onClick={() => navigate('/signup')}
                                    className="p-5 px-2 flex cursor-pointer flex-row justify-evenly gap-2 border-b-[.1px] border-gray-400 text-md font-semibold">
                                    <span>New Customer</span>
                                    <span className='text-blue-600 hover:underline'>Sign up</span>
                                </li>
                            }
                            {
                                (auth && !auth.isAdmin )&& 
                                <>
                                    <li
                                        onClick={handleLoginClick}
                                        className="p-4 px-2 cursor-pointer flex flex-row items-center justify-start gap-2 border-b-[.1px] hover:bg-gray-100 border-gray-400">
                                        <RiUser3Fill className="text-md md:text-lg text-gray-400" />
                                        <span className='text-sm md:text-md'>My Profile</span>
                                    </li>
                                    <li
                                        onClick={() => console.log()}
                                        className="p-4 px-2 cursor-pointer flex flex-row items-center justify-start gap-2 border-b-[.1px] hover:bg-gray-100  border-gray-400">
                                        <MdOutlineFavorite className="text-md md:text-lg text-gray-400" />
                                        <span className='text-sm md:text-md'>Wishlist</span>
                                    </li>
                                    <li
                                        onClick={() => navigate('/orders')}
                                        className="p-4 px-2 cursor-pointer flex flex-row items-center justify-start gap-2 border-b-[.1px] hover:bg-gray-100 border-gray-400">
                                        <HiShoppingCart className="text-md md:text-lg text-gray-400" />
                                        <span className='text-sm md:text-md'>Orders</span>
                                    </li>
                                    <li
                                        onClick={() => console.log()}
                                        className="p-4 px-2 cursor-pointer flex flex-row items-center justify-start gap-2 border-b-[.1px] hover:bg-gray-100  border-gray-400">
                                        <RiCoupon2Fill className="text-md md:text-lg text-gray-400" />
                                        <span className='text-sm md:text-md'>Rewards</span>
                                    </li>
                                </>
                            }
                            

                            {
                                auth && 
                                <li
                                    onClick={handleLogoutClick}
                                    className="p-4 px-2 cursor-pointer flex flex-row items-center justify-start gap-2 border-b-[.1px] hover:bg-gray-100  border-gray-400">
                                    <RiLogoutBoxFill className="text-md md:text-lg text-gray-400" />
                                    <span className='text-sm md:text-md'>Logout</span>
                                </li>
                            }
                        </ul>
                    </div>
                )}

                

            </div>
        </div>
    )
}

export default LoginDropdown