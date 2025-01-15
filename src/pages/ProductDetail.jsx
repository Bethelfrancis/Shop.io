import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import { useState, useEffect } from "react";
import Footer from '../component/Footer'
import Subscribe from '../component/Subscribe'
import ReviewsFAQs from '../component/ReviewsFaqs'

const ProductDetails = () => {
    const { id } = useParams()
    const { data:products, isPending, error } = useFetch(`https://shop-co-7oze.onrender.com/product/${id}`)
    const [ num, setNum ] = useState(1)
    const [ selectedSize, setSelectedSize ] = useState('')
    const [ isAdding, setIsAdding ] = useState(false)
    const navigate = useNavigate()

    const handleSizeSelected = size => {
        setSelectedSize(size)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const plusOne = () => {
        setNum(num + 1)
    }

    const minusOne = () => {
        if (num > 1) {
            setNum(num - 1)
        }
    }

    const handleAddCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to the cart')
            return;
        }

        setIsAdding(true)

        if (products) {
            const cart = {
                id: products.id,
                name: products.name,
                image: products.image,
                price: products.price,
                size: selectedSize,
                quantity: num
            }

            fetch('https://shop-co-7oze.onrender.com/order')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Failed to fetch Data. Or check Internet Connection')
                    }
                    return res.json()
                })
                .then(exitingCart => {
                    const existingCartId = exitingCart.findIndex(item => 
                        item.id === cart.id
                    )

                    if (existingCartId !== -1) {
                        const updateCart = {
                            ...exitingCart[existingCartId],
                            quantity: exitingCart[existingCartId].quantity + cart.quantity,
                            size: cart.size
                        }

                        fetch(`https://shop-co-7oze.onrender.com/order/${exitingCart[existingCartId].id}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(updateCart)
                        })
                            .then(res => {
                                if (!res.ok) {
                                    throw Error('Failed to Update to Cart. Or check Internet Connection')
                                }
                                setIsAdding(false)
                                return res.json()
                            })
                            .then(() => {
                                setIsAdding(false)
                                navigate('/cart')
                            })
                    }   else {
                            fetch('https://shop-co-7oze.onrender.com/order', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(cart)
                            })
                                .then(res => {
                                    if (!res.ok) {
                                        throw Error('Failed to Add to Cart. Or check Internet Connection')
                                    }
                                    setIsAdding(false)
                                    return res.json()
                                })
                                .then(() => {
                                    setIsAdding(false)
                                    navigate('/cart')
                                })
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert(error);
                    setIsAdding(false)
                });
        }
    }

    return (
        <div className="pt-20">

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
            
            <hr className='bg-greys h-[2px] mb-7 mx-8 lg:mx-4' />

            {products && (
                <div 
                    key={products.id} 
                    className='flex xl:flex-col justify-between mb-20 lg:px-4 px-8'
                >
                    <DetailsImage products={products} />
                    <div className="w-1/2 xl:w-full flex flex-col items-start">
                        <h2 className='htwo'>{products.name}</h2>
                        <img 
                            src={products.rating} 
                            alt={products.name}
                            className='h-5 my-3'
                        />
                        <h4 className='text-2xl font-semibold'>${products.price}</h4>
                        <p className="para">{products.desc}</p>
                        <hr className='bg-greys w-full h-[2px] my-5 mr-40' />
                        <ProductSize selectedSize={selectedSize} handleSizeSelected={handleSizeSelected}/>
                        <hr className='bg-greys w-full h-[2px] my-5 mr-40' />
                        <CartDetails minusOne={minusOne} plusOne={plusOne} num={num} handleAddCart={handleAddCart} isAdding={isAdding} />
                    </div>
                </div>
            )}

            <ReviewsFAQs />
            <Subscribe />
            <Footer />
            

        </div>
    );
}

const ProductSize = ({ selectedSize, handleSizeSelected }) => {

    return(
        <div className="space-y-4">
            <p className="para">Choose Size</p>
            <div className="flex flex-row flex-wrap gap-3">
                {['Small', 'Medium', 'Large', 'X-Large'].map((size, index) => (
                    <span 
                        key={index}
                        className={`py-1.5 px-8 rounded-3xl cursor-pointer hover:shadow-2xl ${
                            selectedSize === size
                                ? 'bg-black text-white'
                                : 'text-text bg-greys'
                        }`}
                        onClick={() => handleSizeSelected(size)}
                    >
                        {size}
                    </span>
                ))}
            </div>
        </div>
    )
}

const CartDetails = ({ minusOne, num, plusOne, handleAddCart, isAdding }) => {
    return (
        <div className="flex max-w-full w-full space-x-7">
            <div className="flex justify-between items-end bg-greys rounded-3xl shadow-sm">
                <button 
                    className="font-semibold text-xl sm:px-3 px-4 py-1.5 hover:border-opacity-30 hover:border-r-black border-r border-r-transparent disabled:cursor-not-allowed" 
                    onClick={minusOne}
                    disabled={num === 1}
                >
                    -
                </button>
                <p className="para sm:px-5 px-7 py-2">{ num }</p>
                <button 
                    className="font-semibold text-xl sm:px-3 px-4 py-1.5 hover:border-opacity-30 hover:border-l-black border-l border-l-transparent" 
                    onClick={plusOne}
                >
                    +
                </button>
            </div>
            <button 
                className="bg-black w-full border-none text-white py-2 rounded-3xl hover:bg-text transition-all duration-500 ease-linear"
                onClick={handleAddCart}
            >
                { !isAdding ? 'Add to Cart' : 'Adding to Cart...' }
            </button>
        </div>
    );
}

const DetailsImage = ({ products }) => {
    return(
        <div className="w-1/2 xl:w-full xl:h-[530px] h-[415px] mt:h-full flex mt:flex-col-reverse xl:justify-between space-x-5 mt:space-x-0 mb-10">
            <div className="mt:flex justify-around flex-wrap xl:space-y-6 mt:space-y-0 xl:w-full space-y-4">
                <img 
                    src={products.image} 
                    alt={products.name}
                    className='w-32 mt:w-[30%] mt:h-full xl:w-44 xl:h-40 h-32 rounded-xl object-cover cursor-pointer'
                />
                <img 
                    src={products.image} 
                    alt={products.name}
                    className='w-32 mt:w-[30%] mt:h-full xl:w-44 xl:h-40 h-32 rounded-xl object-cover cursor-pointer'
                />
                <img 
                    src={products.image} 
                    alt={products.name}
                    className='w-32 mt:w-[30%] mt:h-full xl:w-44 xl:h-40 h-32 rounded-xl object-cover cursor-pointer'
                />
            </div>
            <img 
                src={products.image} 
                alt={products.name}
                className='w-96 xl:w-full h-full rounded-xl mb-10 lg:object-cover cursor-pointer'
            />
        </div>
    )
}


export default ProductDetails