import deleteIcon from '../assets/delete-icon.png'
import { Fragment, useEffect, useState } from 'react'
import Subscribe from '../component/Subscribe'
import Footer from '../component/Footer'
import rightArrow from '../assets/right-arrow.png'
import useFetch from '../customHook/useFetch'


const Cart = () => {
    const [ num,  ] = useState(1)
    const { data:carts, isPending, error } = useFetch(`http://localhost:5000/order`)
    const [ cartItems, setCartItems ] = useState([])

    useEffect(() => {
        if (carts) {
            setCartItems(carts)
        }
    }, [carts])

    const plusOne = (id) => {
        setCartItems(preItems => preItems.map(
            item => (
                item.id === id 
                    ? {...item, quantity: item.quantity + 1 } 
                    : item
            )
        ))
    }

    const minusOne = (id) => {
        setCartItems(preItems => preItems.map(
            item => (
                item.id === id && item.quantity > 1
                    ? {...item, quantity: item.quantity - 1 }
                    : item
            )
        ))
    }

    const handleDeleteCart = (id) => {
        fetch('http://localhost:5000/order/' + id, {
            method: 'DELETE',
        })
        .then(res => {
            if (!res.ok) {
                throw Error('Failed to Delete from Cart. Or check Internet Connection')
            }
            setCartItems(preItems => preItems.filter(item => item.id !== id))
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error);
        });
    }

    return (
        <div className="pt-20">

            <hr className='bg-greys h-[2px] mb-7 mx-8 lg:mx-4' />

            <h1 className="htwo px-8 lg:px-4">your cart</h1>

            <div className="flex lg:flex-col justify-between my-6 px-8 lg:px-4">

                <CartItems carts={cartItems} isPending={isPending} error={error} minusOne={minusOne} plusOne={plusOne} num={num} handleDeleteCart={handleDeleteCart} />
                <CartCost cartItems={cartItems} />

            </div>

            <Subscribe />
            <Footer />

        </div>
    );
}

const CartItems = ({ minusOne, plusOne, num, carts, isPending, error, handleDeleteCart }) => {
    return(
        <div className='w-[59%] lg:w-full lg:mb-8 border rounded-xl p-4 space-y-6'>

            {isPending && (
                <div className="flex justify-center items-center h-64">
                    <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                </div>
            )}

            {error && (
                <div className="flex items-center justify-center h-64">
                    <p className="text-2xl font-semibold text-red-500 text-center">{error}</p>
                </div>
                
            )}

            {
                carts && !carts.length > 0
                    ?   <div className='flex justify-center items-center h-full'>
                            <h3 className='text-2xl text-text font-semibold'>Your Cart is Empty</h3>
                        </div>
                    :   carts && carts.map(item => (
                            <Fragment>
                                <div key={item.id} className='flex sm:flex-col justify-between items-center sm:items-start h-32 sm:h-full sm:space-y-5'>
                                    <div className='flex space-x-4'>
                                        <img 
                                            src={item.image}
                                            alt="Dye T-Shirt" 
                                            className='w-32 h-32 cursor-pointer'
                                        />
                                        <div>
                                            <h5 className='text-xl font-semibold mb-0.5'>
                                                {item.name.length > 13
                                                        ? `${item.name.slice(0, 13)}...` 
                                                        : item.name
                                                }
                                            </h5>
                                            <p className='para'>
                                                <span className='font-medium text-black mr-1'>Size:</span>
                                                {item.size}
                                            </p>
                                            <p className='para'>
                                                <span className='font-medium text-black mr-1'>Quantity:</span>
                                                {item.quantity}
                                            </p>
                                            <h4 className='text-2xl font-semibold mt-3'>${item.price}</h4>
                                        </div>
                                    </div>

                                    <div className='flex flex-col sm:flex-row-reverse items-end justify-between sm:w-full h-full'>
                                        <img src={deleteIcon} alt="Delete icon" className='cursor-pointer' onClick={() => handleDeleteCart(item.id)} />
                                        <ProductQuantity num={item.quantity} minusOne={() => minusOne(item.id)} plusOne={() => plusOne(item.id)} />
                                    </div>
                                </div>
                                <hr className='bg-greys h-[1px] mb-7' />
                            </Fragment>
                    ))
            }
            
        </div>
    )
}
 
const ProductQuantity = ({ minusOne, num, plusOne }) => {
    return (
        <div className="w-fit flex justify-betweenitems-end bg-greys rounded-3xl shadow-sm">
            <button 
                className="font-semibold text-xl px-3 py-1.5 hover:border-opacity-30 hover:border-r-black border-r border-r-transparent disabled:cursor-not-allowed" 
                onClick={minusOne}
                disabled={num === 1}
            >
                -
            </button>
            <p className="para px-5 py-2">{ num }</p>
            <button 
                className="font-semibold text-xl px-3 py-1.5 hover:border-opacity-30 hover:border-l-black border-l border-l-transparent" 
                onClick={plusOne}
            >
                +
            </button>
        </div>
    );
}

const CartCost = ({ cartItems }) => {
    const discount = 0.1;

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    const discountAmount = subtotal * discount
    const deliveryFee = subtotal * 0.02;
    const total = subtotal - discountAmount + deliveryFee;


    return(
        <div className='w-[39%] lg:w-full h-full border rounded-xl p-4 space-y-4'>
            <h3 className='text-2xl font-semibold mb-1.5'>Order Summary</h3>
            <div className='flex justify-between'>
                <h5 className='text-lg font-medium text-text'>Subtotal</h5>
                <h5 className='text-xl font-semibold'>{subtotal.toFixed(2)}</h5>
            </div>
            <div className='flex justify-between'>
                <h5 className='text-lg font-medium text-text'>Disconut</h5>
                <h5 className='text-xl font-semibold text-red-400'>-{discountAmount.toFixed(2)}</h5>
            </div>
            <div className='flex justify-between'>
                <h5 className='text-lg font-medium text-text'>Delivery Fee</h5>
                <h5 className='text-xl font-semibold'>{deliveryFee.toFixed(2)}</h5>
            </div>
            <hr className='bg-greys h-[2px] mb-7' />
            <div className='flex justify-between'>
                <h5 className='text-lg font-medium text-text'>Total</h5>
                <h5 className='text-xl font-semibold'>{total.toFixed(2)}</h5>
            </div>
            <button 
                className="flex items-center justify-center gap-4 bg-black w-full border-none text-white py-2 rounded-3xl hover:bg-text transition-all duration-500 ease-linear"
            >
                    Go to Checkout
                    <img  
                        src={rightArrow} 
                        alt="Right Arrow" 
                        className='grayscale invert w-5 h-5'
                    />
            </button>
        </div>
    )
}

export default Cart;