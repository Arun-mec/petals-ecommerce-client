import React from 'react'

const PaymentStatus = ({isOrderPaid, paidAt}) => {
    
    return (
         <div className="w-full border border-gray-300 rounded-md p-4 bg-white shadow-sm">
            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4">Payment Status</h2>
            {
                isOrderPaid ?
                <h2 className="text-sm md:text-md pb-2">Payment was completed successfully {paidAt}</h2> :
                <h2 className="text-sm md:text-md  pb-2">Cash on delivery order. Please be ready with the the amount at the time of delivery</h2>
            }
        </div>
    )
}

export default PaymentStatus