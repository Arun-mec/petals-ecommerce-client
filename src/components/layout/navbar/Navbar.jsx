import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import NavDrawer from './NavDrawer';
import UserLinks from './UserLinks';
import NavLinks from './NavLinks';
import NavDropDown from './NavDropDown';
import NavbarSm from './NavbarSm';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [isDrawOpen, setIsDrawOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleDrawer = () => setIsDrawOpen(!isDrawOpen);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Memoize navbar class based on route and visibility
    return (
        <>
            {/* Desktop view */}
            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${isHome ? isVisible ? 'bg-gray-100 text-black' : 'bg-black/25 text-white' : 'bg-gray-100 text-black'} w-full h-16 sticky top-0 left-0 hidden lg:flex flex-row items-center 
                    justify-evenly z-[80] text-md font-sans px-10`}>
                <nav className="h-full flex flex-row items-center justify-baseline gap-10">
                    <Logo />
                    <NavLinks />
                </nav>
                <div className='flex flex-row items-center gap-1 md:gap-2'>
                    <UserLinks />
                    <Link to="/login">
                        <span className='cursor-pointer hover:underline'>Login</span>
                    </Link>
                </div>
            </section>
            <NavDropDown isvisible={isVisible} setIsVisible={setIsVisible} />

            {/* Mobile view */}

            <NavbarSm navbarClass={`${isHome ? isVisible ? 'bg-gray-100 text-black' : 'bg-black/25 text-white' : 'bg-gray-100 text-black'}`} toggleDrawer={toggleDrawer}/>

            {isDrawOpen && <NavDrawer toggleDrawer={toggleDrawer} />}
        </>
    );
};

export default Navbar;
