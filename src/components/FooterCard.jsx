import React from 'react'
import { Link } from 'react-router-dom'

const FooterCard = ({
  title, 
  links
}) => {
  const contactItemStyle ="text-sm md:text-md text-gray-900 hover:underline"
  return (
    <div className="flex flex-col items-start justify-start gap-2 md:gap-4 font-raleway">
        <span className='text-md md:text-lg text-gray-400 font-sans uppercase'>{title}</span>
        <section className='flex flex-col justify-start items-start gap-1 md:gap-2'>
          {
            links.map((link) => {
              return (
                <Link to={link.link}>
                  <span className={contactItemStyle}>{link.title}</span></Link>
              )
            })
          }
        </section>
    </div>
  )
}

export default FooterCard