import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../logo/Logo";
import NavDrawer from "./NavDrawer";
import UserLinks from "./UserLinks";
import NavLinks from "./NavLinks";
import NavDropDown from "./NavDropDown";
import NavbarSm from "./NavbarSm";
import CartDrawer from "../../cart/CartDrawer";
import CartDrawerContext from "../../../contexts/CartDrawerContext";
import LoginDropdown from "../../auth/LoginDropdown";
import { useSelector } from "react-redux";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const {isCartDrawOpen, setIsCartDrawOpen } = useContext(CartDrawerContext);
    const [isDrawOpen, setIsDrawOpen] = useState(false);
    const {auth} = useSelector((state) => state.auth);
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleDrawer = () => setIsDrawOpen(!isDrawOpen);
    const toggleCartDrawer = () => setIsCartDrawOpen(!isCartDrawOpen);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Memoize navbar class based on route and visibility
    return (
        <>
            {/* Desktop view */}
            <section
                className={`${isHome ? isVisible ? "bg-gray-100 text-black border-[0.1px] border-gray-300" 
                    : "bg-black/25 text-white" : "bg-gray-100 text-black border-[0.1px] border-gray-300"} 
                    w-full h-[4rem] sticky top-0 left-0 hidden lg:grid grid-cols-4 items-center justify-evenly z-[75] text-md font-sans px-10`}>
                <nav className="h-full flex flex-row items-center justify-center gap-10 " >
                    <Logo />
                </nav>
                <nav className="col-span-2 h-full flex flex-row items-center justify-center gap-10"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <NavLinks />
                </nav>
                <UserLinks toggleCartDrawer={toggleCartDrawer} />
            </section>
            { (auth && !auth.isAdmin) && <NavDropDown isvisible={isVisible} setIsVisible={setIsVisible} /> }
            

            {/* Mobile view */}

            <NavbarSm navbarClass={`${isHome ? isVisible ? "bg-gray-100 text-black" : "bg-black/25 text-white" : "bg-gray-100 text-black"}`} toggleDrawer={toggleDrawer} />

            {isDrawOpen && <NavDrawer toggleDrawer={toggleDrawer} />}
            {isCartDrawOpen && <CartDrawer toggleCartDrawer={toggleCartDrawer} />}
        </>
    );
};

export default Navbar;
