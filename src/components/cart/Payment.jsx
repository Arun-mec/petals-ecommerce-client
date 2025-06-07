import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../ui/Button'
import { clearCartItems, savePaymentMethod } from '../../slices/cartSlice'
import { LoaderContext } from '../../contexts/LoaderContext'
import { useGetOrderDetailsQuery, useGetPaypalClientIdQuery, usePayOrderMutation } from '../../slices/orderApiSlice'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { IoIosArrowDown } from 'react-icons/io'


const Payment = () => {
    const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
    const labelStyle = "text-sm md:text-md text-black"

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [paymentErr, setPaymentErr] = useState(false);
    const [message, setMessage] = useState("");
    const [isTestPayOpen, setIsTestPayOpen] = useState(false);
    const [isPaypalPayOpen, setIsPaypalPayOpen] = useState(false);
    const [isCodOpen, setIsCodOpen] = useState(false);

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;

    const params = useParams();
    const orderId = params.id;

    const { data: order, isLoading, isError, refetch} = useGetOrderDetailsQuery(orderId);

    const { values, handleChange, resetForm } = useForm({});

    const { showLoader, hideLoader } = useContext(LoaderContext);

    useEffect(() => {
        if (!shippingAddress) {
            navigate('/shipping');
        }
    }, [navigate, shippingAddress])

    const [payOrder, { isLoading: loadingPay, error: errorPay }] = usePayOrderMutation();

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

    const auth = useSelector((state) => state.auth);

    const { data: paypal, isLoading: loadingClientId, error: errorClientId } = useGetPaypalClientIdQuery();

    const onApproveTest = async () => {
        await payOrder({ orderId, details : {payer :{}} });
        dispatch(savePaymentMethod({ paymentMethod: "Paypal" }))
        dispatch(clearCartItems());
        navigate(`/orders/${orderId}`);
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(async (details) => {
            try {
                await payOrder({ orderId, details : { payer :{}}});
                dispatch(savePaymentMethod({ paymentMethod: "Test Payment" }))
                dispatch(clearCartItems());
                navigate(`/orders/${orderId}`);
            } catch (error) {
                setPaymentErr(true);
                setMessage(error?.data?.message || error?.message)
            }
        })
    }

    const createOrder = () => {
        return action.order.create({
            purchase_units : [
                {
                    amount : {
                        value : order.totalPrice
                    }
                }
            ]
        })
        .then((orderId) => {
            return orderId;
        })
    }

    const onError = (error) => {
        setPaymentErr(true);
        setMessage(error?.data?.message || error?.message)
    }

    const codApprove = () => {
        dispatch(savePaymentMethod({ paymentMethod: "COD/DigitalPayment" }))
        dispatch(clearCartItems());
        navigate(`/orders/${orderId}`);
    }

    useEffect(() => {
        if (!errorClientId && !loadingClientId && paypal.clientId) {
            const loadPaypalScript = async () => {
                paypalDispatch({
                    type: 'resetOptions',
                    value: {
                        'client-id': paypal.clientId,
                        currency: 'USD'
                    }
                })
            }
            paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
        }

        if (order && !order.isPaid) {
            if (!window.paypal) {
                loadPaypalScript();
            }
        }
    }, [order, paypal, loadingClientId, errorClientId, paypalDispatch]);

    const handleSubmit = (e) => {
        showLoader();
        e.preventDefault();
        if (Object.keys(values).length === 0) {
            setFormErr("Atlease one selection required!");
            hideLoader();
            return;
        }
        else {
            dispatch(savePaymentMethod(values?.paymentMethod || null));
            hideLoader();
            navigate('/ordersummary')
        }
    }

    const handleOnChange = (e) => {
        setFormErr("")
        handleChange(e)
    }

    return (
        <div className="smcontainer md:container md:min-h-[60vh] lg:min-h-[80vh]
            flex flex-col justify-start items-center gap-2 md:gap-4 p-2 md:p-4 py-20 md:py-28">
            <div className="w-full flex flex-row justify-between items-center sm:w-3/4 lg:w-1/2 border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Payment Methods</span>
            </div>
            <div className="w-full flex flex-col justify-between items-center sm:w-3/4 lg:w-1/2 p-1 gap-2">

                {/* Error Payment */}
                {order?.isPaid && paymentErr &&
                    <div className="w-full flex flex-col gap-2 border-[0.1px] border-red-400 bg-red-100 rounded p-4 shadow">
                        <span className="font-medium text-red-600">Payment Error</span>
                        <span className="font-medium text-red-600">{message}</span>
                        <span className="font-medium text-red-600">{order.paidAt}</span>
                    </div>
                }
                {/* Error Payment */}
                {order?.isPaid && !paymentErr &&
                    <div className="w-full flex flex-col gap-2 border-[0.1px] border-green-600 bg-green-100 rounded p-4 shadow">
                        <span className="font-medium text-green-600">Payment Error</span>
                        <span className="font-medium text-green-600">{message}</span>
                    </div>
                }

                {/* Test payment */}
                <div className="w-full border-[0.1px] border-gray-400 rounded p-4 shadow">
                    <div
                        onClick={() => setIsTestPayOpen(!isTestPayOpen)}
                        className="flex items-center justify-between cursor-pointer select-none" >
                        <div className="flex items-center">
                            <span className="font-medium">Test Payment</span>
                        </div>

                        <span
                            className={`transition-transform duration-200 text-lg ${isTestPayOpen ? 'rotate-180' : ''
                                }`}>
                            <IoIosArrowDown />
                        </span>
                    </div>

                    {isTestPayOpen && (
                        <div className="flex items-center max-w-md mt-3 text-sm text-gray-700">
                            <Button content="Test Pay Order" onClick={onApproveTest}
                                style="p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:bg-white hover:text-blue-600 text-md rounded" />
                        </div>
                    )}
                </div>

                {/* Paypal */}
                <div className="w-full border-[0.1px] border-gray-400 rounded p-4 shadow">
                    <div
                        onClick={() => setIsPaypalPayOpen(!isPaypalPayOpen)}
                        className="flex items-center justify-between cursor-pointer select-none" >
                        <div className="flex items-center">
                            <span className="font-medium">Credit/Debit card payments</span>
                        </div>

                        <span
                            className={`transition-transform duration-200 text-lg ${isPaypalPayOpen ? 'rotate-180' : ''
                                }`}>
                            <IoIosArrowDown />
                        </span>
                    </div>

                    {isPaypalPayOpen && (
                        <div className="flex items-center max-w-md mt-3 text-sm text-gray-700">
                            <PayPalButtons
                                onApprove={onApprove}
                                createOrder={createOrder}
                                onError={onError} />
                        </div>
                    )}
                </div>

                {/* Cash On Delivery */}
                <div className="w-full border-[0.1px] border-gray-400 rounded p-4 shadow">
                    <div
                        onClick={() => setIsCodOpen(!isCodOpen)}
                        className="flex items-center justify-between cursor-pointer select-none" >
                        <div className="flex items-center">
                            <span className="font-medium">Cash on delivery</span>
                        </div>
                        <span
                            className={`transition-transform duration-200 text-lg ${isCodOpen ? 'rotate-180' : ''
                                }`}>
                            <IoIosArrowDown />
                        </span>
                    </div>

                    {isCodOpen && (
                        <div className="flex items-center max-w-md mt-3 text-sm text-gray-700">
                            <Button content="Place an order" onClick={codApprove}
                                style="p-2 border-[.1rem] bg-amber-400 border-amber-200 text-white hover:bg-white hover:text-amber-200 text-md rounded" />
                        </div>
                    )}
                </div>



            </div>
        </div>
    )
}

export default Payment