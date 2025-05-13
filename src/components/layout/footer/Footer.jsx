import React from 'react'
import FooterContactCard from '../footer/FooterCard'
import SubscriptionForm from '../footer/SubscriptionForm'
import { FaRegCopyright } from "react-icons/fa";


const contactLinks = {
    title : "Contact",
    links : [
        {
            title : "+91 xxxxxxxxxxx",
            link : ""
        },
        {
            title : "Mail Us",
            link : ""
        },
        {
            title : "Monday to Friday 9am to 3pm IST",
            link : ""
        }
    ]
}

const customerLinks = {
    title : "Customer",
    links : [
        {
            title : "Start a Return",
            link : ""
        },
        {
            title : "Return Policy",
            link : ""
        },
        {
            title : "FAQ",
            link : ""
        },
        {
            title : "Catelogs and Mailers",
            link : ""
        }
    ]
}

const companyLinks = {
    title : "Company",
    links : [
        {
            title : "About Us",
            link : ""
        },
        {
            title : "Sustainability",
            link : ""
        },
        {
            title : "Discover Revive",
            link : ""
        },
        {
            title : "Careers",
            link : ""
        },
        {
            title : "Privacy Policy and Terms",
            link : ""
        }
    ]
}

const links = [contactLinks, companyLinks, customerLinks]

const Footer = () => {
  return (
    <section className='bg-gray-100 py-10 '>
        <div className="smcontainer lg:container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    links.map((link) => {
                        return (
                            <FooterContactCard links={link.links} title={link.title} />
                        )
                    })
                }
            </div>
            <SubscriptionForm />
        </div>
        <span className='flex flex-row items-center justify-center gap-1 text-gray-400'>
            <FaRegCopyright />All rights reserved</span>
    </section>
  )
}

export default Footer