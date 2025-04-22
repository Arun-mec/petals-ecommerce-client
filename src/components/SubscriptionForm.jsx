import React from 'react'
import Button from './Button'

const SubscriptionForm = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
        <span className='text-md md:text-lg text-gray-400 font-sans'>Get the latest news from us</span>
        <section className='flex flex-col gap-1'>
            <input type="text" placeholder='Enter your email address'
                    className='border-[0.1rem] border-gray-200 w-2/3 p-2 focus:outline-black'/>
            <span className='text-sm lg:text-md'>
                By signing up, you agree to the <span className='underline cursor-pointer'>Privacy policy</span> and <span className='underline cursor-pointer'>Terms of service</span>
            </span>
        </section>
        <Button content="Subscribe" style="p-1 border-[.1rem] border-black bg-black text-white hover:text-black text-md" />
    </div>
  )
}

export default SubscriptionForm