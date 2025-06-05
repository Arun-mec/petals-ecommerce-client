import React from 'react'
import Logo from '../logo/Logo'
import UserLinks from './UserLinks'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavbarSm = ({navbarClass,toggleDrawer}) => {
  return (
    <section className={`${navbarClass} w-full h-16 sticky lg:hidden flex flex-row items-center justify-between z-[75] text-md font-sans px-4`}>
        <nav className="flex flex-row items-center gap-2">
            <GiHamburgerMenu className="text-xl md:text-2xl" />
            <Logo />
        </nav>
        <UserLinks />
    </section>
  )
}

export default NavbarSm