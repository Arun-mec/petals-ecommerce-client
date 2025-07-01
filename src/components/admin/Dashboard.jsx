import React from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { RiMoneyRupeeCircleLine } from 'react-icons/ri'

const Dashboard = () => {
    return (
        <div className="smcontainter md:container mx-auto px-4 my-20">
            {/* sales data */}
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center w-full gap-4'>
                {/* Earnings */}
                <div className='w-full flex flex-col items-start justify-evenly gap-2 md:gap-4 p-2 bg-gray-100 border-[0.1px] border-gray-400'>
                    <span className='bg-gray-300 text-bold text-2xl md:text-4xl rounded p-2'>
                        <RiMoneyRupeeCircleLine />
                    </span>
                    <div className='w-full flex flex-row gap-2'>
                        <div className='w-full flex flex-col items-start justify-start'>
                            <span className='text-bold text-sm md:text-md hover:underline cursor-pointer'>Total earnings</span>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <span className='text-bold ext-2xl md:text-3xl'>100</span>
                                <span className='bg-green-200 text-bold text-2xl md:text-4xl rounded-[50%]'>
                                    <MdArrowDropUp />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Orders */}
                <div className='w-full flex flex-col items-start justify-evenly gap-2 md:gap-4 p-2 bg-gray-100 border-[0.1px] border-gray-400'>
                    <span className='bg-gray-300 text-bold text-2xl md:text-4xl rounded p-2'>
                        <RiMoneyRupeeCircleLine />
                    </span>
                    <div className='w-full flex flex-row gap-2'>
                        <div className='w-full flex flex-col items-start justify-start'>
                            <span className='text-bold text-sm md:text-md hover:underline cursor-pointer'>Products Added</span>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <span className='text-bold ext-2xl md:text-3xl'>100</span>
                                <span className='bg-green-200 text-bold text-2xl md:text-4xl rounded-[50%]'>
                                    <MdArrowDropUp />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings */}
                <div className='w-full flex flex-col items-start justify-evenly gap-2 md:gap-4 p-2 bg-gray-100 border-[0.1px] border-gray-400'>
                    <span className='bg-gray-300 text-bold text-2xl md:text-4xl rounded p-2'>
                        <RiMoneyRupeeCircleLine />
                    </span>
                    <div className='w-full flex flex-row gap-2'>
                        <div className='w-full flex flex-col items-start justify-start'>
                            <span className='text-bold text-sm md:text-md hover:underline cursor-pointer'>Total orders</span>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <span className='text-bold ext-2xl md:text-3xl'>100</span>
                                <span className='bg-red-200 text-bold text-2xl md:text-4xl rounded-[50%]'>
                                    <MdArrowDropDown />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings */}
                <div className='w-full flex flex-col items-start justify-evenly gap-2 md:gap-4 p-2 bg-gray-100 border-[0.1px] border-gray-400'>
                    <span className='bg-gray-300 text-bold text-2xl md:text-4xl rounded p-2'>
                        <RiMoneyRupeeCircleLine />
                    </span>
                    <div className='w-full flex flex-row gap-2'>
                        <div className='w-full flex flex-col items-start justify-start'>
                            <span className='text-bold text-sm md:text-md hover:underline cursor-pointer'>Users</span>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <span className='text-bold ext-2xl md:text-3xl'>100</span>
                                <span className='bg-red-200 text-bold text-2xl md:text-4xl rounded-[50%]'>
                                    <MdArrowDropDown />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sales chart */}
            {/* recent order */}
            {/* popular products */}
        </div>
    )
}

export default Dashboard