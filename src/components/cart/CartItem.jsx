import { useDispatch } from 'react-redux'
import { MdDelete, MdKeyboardArrowDown, MdOutlineFavorite } from 'react-icons/md'
import { IoFlashSharp } from 'react-icons/io5'
import { useState } from 'react'
import { changeItemQty, removeFromCart } from '../../slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../constants'

const CartButtons = () => {

    const ButtonIconStyle = `text-md md:text-xl`
    const ButtonTextStyle = `text-xs md:text-md`
    const ButtonBoxStyle = `h-full w-full flex flex-row gap-1 md:gap-2 items-center justify-center 
            cursor-pointer p-1 hover:bg-gray-300 rounded`
    return (
        <div className='grid grid-cols-3 items-center justify-center gap-1 md:gap-2 bg-gray-200 p-1 md:p-2'>
            <section className={ButtonBoxStyle}>
                <MdOutlineFavorite className={ButtonIconStyle} />
                <span className={ButtonTextStyle} >Move to wishlist</span>
            </section>
            <section className={ButtonBoxStyle}>
                <MdDelete className={ButtonIconStyle} />
                <span className={ButtonTextStyle} >Remove from cart</span>
            </section>
            <section className={ButtonBoxStyle}>
                <IoFlashSharp className={ButtonIconStyle} />
                <span className={ButtonTextStyle} >Buy now</span>
            </section>
        </div>
    )
}

const CartItem = ({ cartItem, showControls = true, showDelete = true, showCount = true, productId}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (qty) => {
        dispatch(changeItemQty({ _id: cartItem._id, qty }));
        setIsOpen(false);
    };

    const handleDelete = () => {
        dispatch(removeFromCart(cartItem._id));
        navigate('/')
    }

    console.log(`${BASE_URL}/${cartItem.image}`)
    return (
        <section className='relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
            <div className='grid grid-cols-4 items-center gap-4 p-3'>
                <img
                    src={`${BASE_URL}${cartItem.image}`}
                    alt="Product"
                    className="col-span-1 w-full aspect-square object-cover rounded"
                />
                <section className="col-span-3 flex flex-col gap-2 text-sm md:text-base text-gray-700">
                    <Link to={`/products/${productId ? productId : cartItem._id }`}><span className="font-medium text-gray-800">{cartItem.name}</span></Link>
                    <span className="text-gray-500">Beige, MD</span>

                    {cartItem.qty === 10 && (
                        <span className='text-xs text-gray-400'>
                            Max allowed quantity in a single order is 10
                        </span>
                    )}

                    {showCount &&
                        <div className='flex items-center gap-2'>
                            <span className="text-gray-600">Quantity</span>

                            <div className="relative w-20">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-full flex justify-between items-center px-3 py-1 border border-gray-300 rounded bg-white hover:border-gray-500 transition"
                                >
                                    <span>{cartItem.qty}</span>
                                    <MdKeyboardArrowDown className="text-lg" />
                                </button>

                                {isOpen && (
                                    <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-md overflow-hidden">
                                        {[...Array(10)].map((_, index) => (
                                            <li
                                                key={index + 1}
                                                onClick={() => handleSelect(index + 1)}
                                                className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {index + 1}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    }
                </section>
            </div>

            {showControls && <CartButtons />}
            {showDelete && <MdDelete
                    onClick={handleDelete}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl md:text-2xl cursor-pointer transition-colors"
                /> }

            
        </section>

    )
}

export default CartItem