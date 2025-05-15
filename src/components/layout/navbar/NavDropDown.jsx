import React from 'react'
import { Link } from 'react-router-dom';
import { navbarlinks } from './navbarlinks';

// ${isHome ? 'bg-gray-100 text-black' : 'bg-black/20 text-white'}

const NavDropDown = ({ isvisible, setIsVisible }) => {

    const handleMouseEnter = () => {
        setIsVisible(true)
    }

    const handleMouseLeave = () => {
        setIsVisible(false)
    }

    return (
        <> {
            isvisible &&
            <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                className={`bg-gray-100 text-black w-full absolute hidden lg:flex flex-row z-[75]
                                items-center justify-evenly text-md font-sans px-10 animate-slidedown p-2 md:p-4`}>
                <section className='flex flex-row items-start gap-10'>
                    {
                        navbarlinks.map((navlink, key) => {
                            return (
                                <div className='basis-1/5 grow flex flex-col items-start justify-start gap-4 md:gap-6'>
                                    <span to={navlink.link}>{navlink.name}</span>
                                    <div key={key} className='flex flex-col items-start justify-start gap-1 md:gap-2'>
                                        {
                                            navlink.subtitles.map((subtitle, key) => {
                                                return (
                                                    <Link key={key} link={subtitle.link} className='text-sm md:text-md text-gray-600 hover:underline'>{subtitle.name}</Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        }
        </>
    )
}

export default NavDropDown