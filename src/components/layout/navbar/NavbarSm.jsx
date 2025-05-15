import React from 'react'
import Logo from '../logo/Logo'
import UserLinks from './UserLinks'

const NavbarSm = ({navbarClass,toggleDrawer}) => {
  return (
    <section className={`${navbarClass} w-full h-16 sticky lg:hidden flex flex-row items-center justify-center z-[80] text-md font-sans px-4`}>
        <nav className="w-full flex flex-row items-center justify-start gap-5">
            <span className="material-symbols-outlined" onClick={toggleDrawer}>menu</span>
            <Logo />
        </nav>
        <UserLinks />
    </section>
  )
}

export default NavbarSm