import React from 'react'

const DashboardCard = ({title}) => {
    return (
        <div className='flex flex-row p-4 bg-gray-100'>
            <span className='text-bold text-blue-400 text-xl md:text-2xl'>{title}</span>
            <span></span>
        </div>
    )
}

const Dashboard = () => {
  return (
     <div className="smcontainter md:container mx-auto px-4 my-20">
        {/* sales data */}
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center w-full gap-4'>
            <DashboardCard title="Earnings" />
            <DashboardCard title="Orders"/>
            <DashboardCard title="Users"/>
            <DashboardCard title="Products"/>
        </section>
        {/* sales chart */}
        {/* recent order */}
        {/* popular products */}
     </div>
  )
}

export default Dashboard