import React, { useContext } from 'react'
import { useGetAllOrdersQuery } from '../../slices/orderApiSlice'
import { LoaderContext } from '../../contexts/LoaderContext';
import { Link } from 'react-router-dom';

const OrderList = () => {

    const { data: orders, isLoading, error } = useGetAllOrdersQuery();

    const { showLoader, hideLoader } = useContext(LoaderContext);

    // isLoading ? showLoader() : hideLoader()

    console.log(orders);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="smcontainer md:container overflow-x-auto my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-28">
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
                        <th className="px-6 py-4">DETAILS</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map((order, idx) => (
                        <tr
                            key={idx}
                            className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } hover:bg-gray-100 transition`}>
                            <td className="px-6 py-4">{order._id}</td>
                            <td className="px-6 py-4">{order.user && order.user.username}</td>
                            <td className="px-6 py-4">{order.createdAt.substring(0, 10)}</td>
                            <td className="px-6 py-4">{order.totalPrice}</td>
                            <td className="px-6 py-4">
                                {
                                    order.isPaid ?
                                        order.paidAt.substring(0, 10) :
                                        <div>Not paid</div>

                                }
                            </td>
                            <td className="px-6 py-4">
                                {
                                    order.isDelivered ?
                                        order.deliveredAt.substring(0, 10) :
                                        <div>Not delivered</div>

                                }
                            </td>
                            <td>
                                <Link to={`/orders/${order._id}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderList