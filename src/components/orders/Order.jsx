import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetOrderDetailsQuery, useGetPaypalClientIdQuery, usePayOrderMutation } from '../../slices/orderApiSlice';
import Loader from '../layout/loader/Loader';
import PriceSummary from '../cart/PriceSummary';
import CartItem from '../cart/CartItem';
import DeliveryStatus from './DeliveryStatus';
import PaymentStatus from './PaymentStatus';
import { usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';

const Order = () => {

    const params = useParams();
    const orderId = params.id;

    const { data: order, isLoading, isError } = useGetOrderDetailsQuery(orderId);

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <div className="w-full md:w-1/2 bg-gray-100 container mx-auto min-h-[80vh] px-4 md:px-8 py-16 flex flex-col items-center gap-6">
                <div className="w-full flex justify-between items-center border-b border-gray-300 pb-2">
                    <h1 className="text-2xl font-semibold text-gray-800">Order : {order._id}</h1>
                </div>
                <section className="grid grid-cols-1 gap-6">
                    <section className="md:col-span-2 flex flex-col gap-6">
                        <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-2">Shipping Address</h2>
                            <div className="flex flex-col text-sm text-gray-700 space-y-1">
                                <span>{order.shippingAddress.address}</span>
                                <span>{order.shippingAddress.city}</span>
                                <span>{order.shippingAddress.landmark}</span>
                                <span>{order.shippingAddress.state}</span>
                                <span>{order.shippingAddress.pincode}</span>
                                <span>{order.shippingAddress.number}</span>
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4">Your Items</h2>
                            <div className="w-3/4 flex flex-col gap-4">
                                {order.orderItems.map((orderItem, index) => (
                                    <CartItem key={index} cartItem={orderItem} showControls={false} showDelete={false} showCount={false} />
                                ))}
                            </div>
                        </div>

                    </section>

                </section>
                <PriceSummary
                    itemPrice={order.itemPrice}
                    taxPrice={order.taxPrice}
                    shippingPrice={order.shippingPrice}
                    totalPrice={order.totalPrice}
                    showBtn={false}
                    style="w-full" />
                <DeliveryStatus isOrderDelivered={order} />
                <PaymentStatus isOrderPaid={order.isPaid} paidAt={order.paidAt} />
            </div>
            <div className='w-full flex items-center justify-center p-8 cursor-pointer hover:underline'>
                <Link to='/'>Back to home</Link>
            </div>
        </>
    )
}

export default Order