import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoaderContext } from '../../contexts/LoaderContext'
import { useGetMyOrdersQuery } from '../../slices/orderApiSlice'
import { useSelector } from 'react-redux'
import CartItem from '../cart/CartItem'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

const OrderCard = ({ order }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 rounded-md bg-white shadow-sm p-4 transition-all duration-300">
      {/* Header with toggle */}
      <div className="w-full flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h1 className="text-sm font-semibold text-gray-800">Order : {order._id}</h1>
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          {expanded ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
        </button>
      </div>

      {/* Expandable Section */}
      {expanded && (
        <div className="mt-6 flex flex-col gap-6">
          {/* Order Items */}
          <div>
            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-2">
              Order Items
            </h2>
            <div className="flex flex-col gap-2 p-2">
              {order.orderItems.map((orderItem) => {
                return (
                    <CartItem
                      key={orderItem._id}
                      cartItem={orderItem}
                      showControls={false}
                      productId={orderItem.product}
                    />
                )
              })}
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-2">
              Shipping Address
            </h2>
            <div className="flex flex-col text-sm text-gray-700 space-y-1">
              <span>{order.shippingAddress.address}</span>
              <span>{order.shippingAddress.city}</span>
              <span>{order.shippingAddress.landmark}</span>
              <span>{order.shippingAddress.state}</span>
              <span>{order.shippingAddress.pincode}</span>
              <span>{order.shippingAddress.number}</span>
            </div>
          </div>

          {/* Delivery Status */}
          <div>
            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-2">
              Delivery Status
            </h2>
            <p className="text-sm md:text-base">In transit</p>
          </div>

          {/* Payment Status */}
          <div>
            <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-2">
              Payment Status
            </h2>
            {order.PaymentStatus ? (
              <p className="text-sm md:text-base">
                Payment was completed successfully {order.paidAt}
              </p>
            ) : (
              <p className="text-sm md:text-base">
                Cash on delivery order. Please be ready with the amount at the time of
                delivery
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


const Myorders = ({ style }) => {

    const auth = useSelector((state) => state.auth);

    const { showLoader, hideLoader } = useContext(LoaderContext);
    const { data: orders, isLoading: orderLoading, error: orderError } = useGetMyOrdersQuery();

    console.log(orders)

    return (
        <div className="smcontainer md:container flex flex-col items-center justify-center my-4 md:my-8 p-4 md:p-8 py-20 md:py-28 gap-6">

            <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col items-start gap-2 p-4 shadow-md rounded bg-white">
                <div className="flex flex-col">
                    Hello <span className="text-xl font-bold">{auth.auth.username}</span>
                </div>
            </div>

            {orders &&
                orders.map((order) => (
                    <OrderCard order={order} />
                ))}
        </div>

    )
}

export default Myorders