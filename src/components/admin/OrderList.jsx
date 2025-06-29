import React, { useContext } from 'react'
import { useGetAllOrdersQuery } from '../../slices/orderApiSlice'
import { LoaderContext } from '../../contexts/LoaderContext';
import { Link, useNavigate } from 'react-router-dom';

const OrderList = () => {

    const navigate = useNavigate();

    const { data: orders, isLoading, error } = useGetAllOrdersQuery();

    const { showLoader, hideLoader } = useContext(LoaderContext);

    const handleRowClick = (orderId) => {
        if (orderId) {
            navigate(`/orders/${orderId}`);
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="smcontainer md:container overflow-x-auto my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-20">
            <div className="w-full flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Orders</span>
            </div>
            <table className="my-4 min-w-full text-sm text-left text-gray-700 shadow-sm rounded-lg">
                <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">USER</th>
                        <th className="px-6 py-4">DATE</th>
                        <th className="px-6 py-4">TOTAL</th>
                        <th className="px-6 py-4">PAID</th>
                        <th className="px-6 py-4">DELIVERED</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map((order, idx) => (
                        <tr
                            key={idx}
                            onClick={() => handleRowClick(order._id)}
                            className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } hover:bg-gray-100 transition cursor-pointer`}>
                            <td className="px-6 py-4 text-blue-400">{order._id}</td>
                            <td className="px-6 py-4">{order.user && order.user.username}</td>
                            <td className="px-6 py-4">{order.createdAt.substring(0, 10)}</td>
                            <td className="px-6 py-4">{order.totalPrice}</td>
                            <td className="px-6 py-4">
                                {
                                    order.isPaid ?
                                    <span className='bg-green-100 text-green-800 p-1 rounded'>{order.paidAt.substring(0, 10)}</span> :
                                        <span className='bg-red-100 text-red-800 p-1 rounded'>Not paid</span>

                                }
                            </td>
                            <td className="px-6 py-4">
                                {
                                    order.isDelivered ?
                                        <span className='bg-green-100 text-green-800 p-1 rounded'>{order.deliveredAt.substring(0, 10)}</span> :
                                        <span className='bg-red-100 text-red-800 p-1 rounded'>Not Delivered</span>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderList