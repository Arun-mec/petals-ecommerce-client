import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../ui/Button'
import { savePaymentMethod } from '../../slices/cartSlice'
import { LoaderContext } from '../../contexts/LoaderContext'

const Payment = () => {
    const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
    const labelStyle = "text-sm md:text-md text-black"

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formErr, setFormErr] = useState(false);

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;

    const { values, handleChange, resetForm } = useForm({});

    const { showLoader, hideLoader } = useContext(LoaderContext);

    useEffect(() => {
        if (!shippingAddress) {
            navigate('/shipping');
        }
    }, [navigate, shippingAddress])

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

    return (
        <div className="smcontainer md:container md:min-h-[60vh] lg:min-h-[80vh]
            flex flex-col justify-start items-center gap-2 md:gap-4 p-2 md:p-4 py-20 md:py-28">
            <div className="w-full flex flex-row justify-between items-center sm:w-3/4 lg:w-1/2 border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Payment Methods</span>
            </div>
            <form className='flex flex-col gap-1 md:gap-2 lg:gap-4 w-full sm:w-3/4 lg:w-1/2'>
                <section className='flex flex-row items-center justify-start gap-2 md:gap-4 text-xl md:text-2xl 
                    font-semibold h-6 md:h-8 border-[0.1px] border-gray-400 p-4 py-4 rounded hover:bg-gray-50' checked>
                    <input type="radio" value="Paypal" name="paymentMethod" id=""
                        onChange={(e) => {
                            setFormErr("")
                            handleChange(e)
                        }} />
                    <label for="city" className={labelStyle}>UPI Payments : Paypal</label>
                </section>

                <section className='flex flex-row items-center justify-start gap-2 md:gap-4 text-xl md:text-2xl 
                    font-semibold h-6 md:h-8 border-[0.1px] border-gray-400 p-4 py-4 rounded hover:bg-gray-50' checked>
                    <input type="radio" name="paymentMethod" value="Card Payment" id=""
                        onChange={(e) => {
                            setFormErr("")
                            handleChange(e)
                        }} />
                    <label for="city" className={labelStyle}>Debit/Credit card payments</label>
                </section>

                <section className='flex flex-row items-center justify-start gap-2 md:gap-4 text-xl md:text-2xl 
                    font-semibold h-6 md:h-8 border-[0.1px] border-gray-400 p-4 py-4 rounded hover:bg-gray-50' checked>
                    <input type="radio" name="paymentMethod" value="Card EMI" id=""
                        onChange={(e) => {
                            setFormErr("")
                            handleChange(e)
                        }} />
                    <label for="city" className={labelStyle}>Credit card EMI</label>
                </section>

                <section className='flex flex-row items-center justify-start gap-2 md:gap-4 text-xl md:text-2xl 
                    font-semibold h-6 md:h-8 border-[0.1px] border-gray-400 p-4 py-4 rounded hover:bg-gray-50' checked>
                    <input type="radio" name="paymentMethod" value="COD" id=""
                        onChange={(e) => {
                            setFormErr("")
                            handleChange(e)
                        }} />
                    <label for="city" className={labelStyle}>Cash on delivery</label>
                </section>
                <section className='flex flex-row items-center justify-start gap-2 md:gap-4 text-xl md:text-2xl 
                    font-semibold h-6 md:h-8 border-[0.1px] border-gray-400 p-4 py-4 rounded hover:bg-gray-50' checked>
                    <input type="radio" name="paymentMethod" value="DigitalCOD" id=""
                        onChange={(e) => {
                            setFormErr("")
                            handleChange(e)
                        }} />
                    <label for="city" className={labelStyle}>Digital payment on delivery</label>
                </section>

                <span className='text-xs md:text-sm text-red-600'> {formErr || '\u00A0'}</span>
                <Button content="View Order Details" onClick={(e) => { handleSubmit(e) }}
                    style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:bg-white hover:text-blue-600 text-md rounded" />
            </form>
        </div>
    )
}

export default Payment