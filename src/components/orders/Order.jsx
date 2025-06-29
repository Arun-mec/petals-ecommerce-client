import { Link, useParams } from 'react-router-dom'
import { useDeliverOrderMutation, useGetOrderDetailsQuery, useGetPaypalClientIdQuery, usePayOrderMutation } from '../../slices/orderApiSlice';
import Loader from '../layout/loader/Loader';
import PriceSummary from '../cart/PriceSummary';
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';
import Button from '../ui/Button';

const Order = () => {

    const params = useParams();
    const orderId = params.id;

    const  { auth } = useSelector((state) => state.auth);

    const { data: order, isLoading, isError, refetch } = useGetOrderDetailsQuery(orderId);

    const [deliverOrder, {isLoading : deliverOrderLoading, error}] = useDeliverOrderMutation(orderId);

    if (isLoading) {
        return <Loader />
    }

    const handleDeliverOrder = async (orderId) => {
        try {
            await deliverOrder(orderId);
            refetch();
        }catch(err) {
            console.log(err);
        }

    }

    console.log(order);
    
    return (
        <>
            <div className="w-full sm:w-3/4 lg:w-1/2 bg-gray-100 container mx-auto min-h-[80vh] px-4 md:px-8 py-16 flex flex-col items-center gap-6">
                <div className="w-full flex justify-between items-center border-b border-gray-300 pb-2">
                    <h1 className="text-2xl font-semibold text-gray-800">Order : {order._id}</h1>
                </div>

                <section className="grid grid-cols-1 gap-6">
                    <div className="md:col-span-2 flex flex-col gap-6">
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
                    </div>
                </section>

                <PriceSummary
                    itemPrice={order.itemPrice}
                    taxPrice={order.taxPrice}
                    shippingPrice={order.shippingPrice}
                    totalPrice={order.totalPrice}
                    showBtn={false}
                    style="w-full" />
                
                <div className="w-full border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                    <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4">Delivery Status</h2>
                    <div className='flex flex-row justify-between items-center'>
                        {
                            order.isDelivered ? <h2 className="text-sm md:text-md text-green-700 pb-2">Delivery was completed successfully on {order.paidAt.substring(0,10)}</h2> :
                                 <h2 className="text-sm md:text-md pb-2">In transit {Date.now()}</h2>
                        }
                        {
                            auth && auth.isAdmin && order.isPaid && !order.isDelivered &&
                            <Button content="Mark as delivered" onClick={() => handleDeliverOrder(order._id)}
                                style="max-w-fit p-2 border-[.1rem] bg-black border-black text-white hover:text-black hover:bg-white text-md rounded transition" isDisabled={isLoading} />
                        }
                    </div>
                </div>
                <div className="w-full border border-gray-300 rounded-md p-4 bg-white shadow-sm">
                    <h2 className="text-lg font-medium border-b border-gray-200 pb-2 mb-4">Payment Status</h2>
                    {
                        order.isPaid ?
                            <h2 className="text-sm md:text-md text-green-700 pb-2">Payment was completed successfully {order.paidAt.substring(0,10)}</h2> :
                            <h2 className="text-sm md:text-md  pb-2">Cash on delivery order. Please be ready with the the amount at the time of delivery</h2>
                    }
                </div>
            </div>
            <div className='w-full flex items-center justify-center p-8 cursor-pointer hover:underline'>
                <Link to='/'>Back to home</Link>
            </div>
        </>
    )
}

export default Order