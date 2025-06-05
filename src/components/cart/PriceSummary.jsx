import React from 'react'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const PriceSummary = ({ itemPrice, shippingPrice, taxPrice, totalPrice, style, btnHandler }) => {

    const navigate = useNavigate();

    return (
        <div
            className={` ${style} max-h-fit col-span-1 md:col-span-2 lg:col-span-1 flex flex-col gap-6 p-4 border border-gray-300 rounded-md bg-white shadow-sm`}
        >
            {/* Title */}
            <div className="w-full flex items-start border-b border-gray-200 pb-2">
                <h2 className="text-xl font-semibold text-center text-gray-800">Order Summary</h2>
            </div>

            {/* Price Breakdown */}
            <div className="flex flex-col gap-4 text-sm text-gray-600">
                <div className="flex justify-between px-2">
                    <span>Subtotal</span>
                    <span>{itemPrice}</span>
                </div>
                <div className="flex justify-between px-2">
                    <span>Delivery Charges</span>
                    <span>{shippingPrice}</span>
                </div>
                <div className="flex justify-between px-2">
                    <span>Other Charges</span>
                    <span>{taxPrice}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-4 mt-2 px-2 text-base text-gray-800 font-medium">
                    <span>Bag Total</span>
                    <span>{totalPrice}</span>
                </div>
            </div>

            {/* Button */}
            <Button
                content="Order Now"
                onClick={btnHandler}
                style="w-full py-2 px-4 bg-black text-white hover:bg-white hover:text-black border border-black rounded transition duration-200 text-sm font-semibold"
            />
        </div>

    )
}

export default PriceSummary