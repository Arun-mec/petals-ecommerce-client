import Breadcrumbs from '../ui/BreadCrumb'
import CartItem from './CartItem'
import Button from '../ui/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PriceSummary from './PriceSummary'

const Cart = () => {

    const navigate = useNavigate();

    const btnHandler = () => navigate('/shipping');

    const { itemPrice, cartItems, totalPrice, shippingPrice, taxPrice } = useSelector((state) => state.cart)
    return (
        <div className="smcontainer md:container md:min-h-[60vh] lg:min-h-[80vh]
            flex flex-col justify-start gap-2 md:gap-4 p-2 md:p-4 py-20 md:py-28">
            <Breadcrumbs />
            <div className="w-full flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Shopping Bag</span>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 md:gap-6 py-4'>
                <div className='col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start justify-center gap-5'>

                    <div className="w-full flex flex-col justify-start gap-2">
                        {/* // <NavLinks style='focus:bg-gray-200 focus:rounded-md' /> */}

                        {
                            cartItems.map((cartItem) => {
                                return (
                                    <CartItem cartItem={cartItem} />
                                )
                            })
                        }
                    </div>
                </div>
                <PriceSummary style="w-full lg:w-1/2" itemPrice={itemPrice} 
                    taxPrice={taxPrice} shippingPrice={shippingPrice} 
                    totalPrice={totalPrice} btnHandler={btnHandler} />
            </section>  
        </div>
    )
}

export default Cart