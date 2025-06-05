import React, { useEffect } from 'react'
import Breadcrumbs from '../ui/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../cart/CartItem'
import { useNavigate } from 'react-router-dom'
import PriceSummary from '../cart/PriceSummary'
import { useCreateOrderMutation } from '../../slices/orderApiSlice'
import { clearCartItems } from '../../slices/cartSlice'

const OrderSummary = () => {

    const cart = useSelector((state) => state.cart)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [createOrder, { isLoading, error, data}] = useCreateOrderMutation();

    useEffect(() => {
        if (!cart.shippingAddress.address) {
            navigate('/shipping');
        }
        else if (!cart.paymentMethod){
            navigate('/payment');
        }
    },[cart.paymentMethod, cart.shippingAddress.address, navigate]);

    const btnHandler = async () => {
        const order = await createOrder({
            orderItems : cart.cartItems,
            shippingAddress : cart.shippingAddress,
            paymentMethod : cart.paymentMethod,
            itemPrice : cart.itemPrice,
            shippingPrice : cart.shippingPrice,
            totalPrice : cart.totalPrice,
            taxPrice : cart.taxPrice,
            totalPrice : cart.totalPrice
        }).unwrap().then((res) => {
            dispatch(clearCartItems())
            navigate(`/orders/${res._id}`)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container mx-auto min-h-[80vh] px-4 md:px-8 py-16 flex flex-col gap-6">
            <Breadcrumbs />
            <div className="w-full flex justify-between items-center border-b border-gray-300 pb-2">
                <h1 className="text-2xl font-semibold text-gray-800">Shopping Bag</h1>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <section className="md:col-span-2 flex flex-col gap-6">

                    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                        <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-2">Shipping Address</h2>
                        <div className="flex flex-col text-sm text-gray-700 space-y-1">
                            <span>{cart.shippingAddress.address}</span>
                            <span>{cart.shippingAddress.city}</span>
                            <span>{cart.shippingAddress.landmark}</span>
                            <span>{cart.shippingAddress.state}</span>
                            <span>{cart.shippingAddress.pincode}</span>
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                        <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4">Your Items</h2>
                        <div className="w-3/4 flex flex-col gap-4">
                            {cart.cartItems.map((cartItem, index) => (
                                <CartItem key={index} cartItem={cartItem} showControls={false} showDelete={false} />
                            ))}
                        </div>
                    </div>

                </section>

                <PriceSummary 
                    btnHandler={btnHandler}
                    itemPrice={cart.itemPrice} 
                    taxPrice={cart.taxPrice} 
                    shippingPrice={cart.shippingPrice} 
                    totalPrice={cart.totalPrice} />
            </section>
        </div>

    )
}

export default OrderSummary