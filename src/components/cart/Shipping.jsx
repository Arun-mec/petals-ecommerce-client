import { useDispatch, useSelector } from 'react-redux'
import Button from '../ui/Button'
import useForm from '../../hooks/useForm'
import { saveShippingAddress } from '../../slices/cartSlice'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Shipping = () => {

    const inputStyle = "w-full border-[1px] border-gray-200 p-1 md:p-2 outline-none border-gray-400 rounded placeholder-gray-400"
    const labelStyle = "text-sm md:text-md text-gray-400"

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const search = useLocation();
    const searchParams = new URLSearchParams(search);
    const redirect = searchParams.get('redirect') || '/'

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;

    const { address = "", pincode = "", city = "", landmark = "", state = "", number = "" } = shippingAddress || {};

    const initialState = { address, pincode, city, landmark, state, number };

    const { values, handleChange, resetForm } = useForm(initialState);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress(values));
        navigate('/payment');
    }

    return (
        <div className="smcontainer md:container md:min-h-[60vh] lg:min-h-[80vh]
            flex flex-col justify-start items-center gap-2 md:gap-4 p-2 md:p-4 py-20 md:py-28">
            <div className="w-full flex flex-row justify-between items-center sm:w-3/4 lg:w-1/2 border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Shipping Address</span>
            </div>
            <form className='flex flex-col gap-1 md:gap-2 lg:gap-4 w-full sm:w-3/4 lg:w-1/2'>
                <section>
                    <label for="address" className={labelStyle}>Address Line</label>
                    <span className='text-xs md:text-sm text-red-600 px-2'></span>
                    <input type="text" className={inputStyle} name="address"
                        onChange={(e) => handleChange(e)} placeholder='Address' />
                </section>
                <section>
                    <label for="city" className={labelStyle}>City</label>
                    <input type="text" className={inputStyle} name="city" placeholder='City'
                        onChange={(e) => handleChange(e)} />
                </section>
                <section>
                    <label for="pincode" className={labelStyle}>Pincode</label>
                    <input type="text" className={inputStyle} name="pincode" placeholder='Pincode'
                        onChange={(e) => handleChange(e)} />
                </section>
                <section>
                    <label for="landmark" className={labelStyle}>Landpark</label>
                    <input type="text" className={inputStyle} name="landmark" placeholder='Landmark'
                        onChange={(e) => handleChange(e)} />
                </section>
                <section>
                    <label for="state" className={labelStyle}>State</label>
                    <input type="text" className={inputStyle} name="state" placeholder='State'
                        onChange={(e) => handleChange(e)} />
                </section>
                <section>
                    <label for="number" className={labelStyle}>State</label>
                    <input type="text" className={inputStyle} name="number" placeholder='Number'
                        onChange={(e) => handleChange(e)} />
                </section>
                <span className='text-xs md:text-sm text-red-600'> {'\u00A0'}</span>
                <Button content="Go to payment" onClick={(e) => { handleSubmit(e) }}
                    style="w-full p-2 border-[.1rem] bg-blue-600 border-blue-600 text-white hover:text-blue-600 text-md rounded" />
            </form>
        </div>
    )
}

export default Shipping