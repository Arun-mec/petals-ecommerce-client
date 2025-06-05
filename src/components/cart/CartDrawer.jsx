import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import CartDrawerContext from '../../contexts/CartDrawerContext'

const CartDrawer = ({
    toggleCartDrawer }) => {

        const navigate = useNavigate();
        const { setIsCartDrawOpen } = useContext(CartDrawerContext);

        const { cartItems } = useSelector((state) => state.cart)

        const handleCartBtnClick = () => {
            navigate('/cart')
            setIsCartDrawOpen(false)
        }
        
    return (
        <motion.div
            initial={{ x: "-10%" }}
            whileInView={{ x: 0 }}
            className="fixed top-0 right-0 z-[76] w-[100vw] sm:w-[80vw] md:w-[50vw] lg:w-[35vw] h-[100vh]
                 bg-white p-2 flex flex-col justify-between overflow-auto">

            <div className='flex flex-col items-start justify-center gap-5 py-4'>
                <div className="w-full flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                    <span className='text-xl'>Shopping Bag</span>
                    <RxCross2 onClick={toggleCartDrawer} className="text-xl md:text-2xl text-gray-600" />
                </div>
                <div className="w-full flex flex-col justify-start gap-2">
                    {/* // <NavLinks style='focus:bg-gray-200 focus:rounded-md' /> */}

                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem cartItem={cartItem} showControls={false} />
                        )
                    })
                }
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 bg-gray-50 border-[0.1px] border-gray-400 p-4'>
                <span className='text-md text-gray-600'>Shipping and tax prices will be calculated at the checkout</span>
                <Button content="Go to cart" onClick={handleCartBtnClick} style="w-full p-2 border-[.1rem] border-black bg-black text-white hover:text-black text-md rounded"></Button>
            </div>
        </motion.div>
    )
}

export default CartDrawer