import { useEffect, useState } from "react";
import useFetch from "../customHook/useFetch";
import { Link } from "react-router-dom";
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'
import Subscribe from "../component/Subscribe";
import Footer from "../component/Footer";

const AllProduct = () => {
    const { data:products, isPending, error } = useFetch('https://shop-co-7oze.onrender.com/product')

    const [ currentPage, setCurrentPage ] = useState(1)
    const itemsPerPage = 8;

    const nextProduct = currentPage * itemsPerPage
    const firstPage = nextProduct - itemsPerPage
    const currentProducts = products ? products.slice(firstPage, nextProduct) : [];
    const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 1; 

    const handleNext  = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prePage => prePage + 1)
        }
    }

    const handlePrevious  = () => {
        if (currentPage > 1) {
            setCurrentPage(prePage => prePage - 1)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="pt-16">

            <h1 className="text-4xl font-semibold mb-10 mt-3 ml-3 px-8 lg:px-4">All Products!</h1>
        
            <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-11 px-8 lg:px-4">
                
                {isPending && (
                    <div className="flex justify-center items-center h-64 w-full">
                        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="flex items-center justify-center h-64 w-full">
                        <p className="text-2xl font-semibold text-red-500 text-center">{error}</p>
                    </div>
                    
                )}

                {currentProducts.map((product, index) => (
                    <Link to={`/product/${product.id}`} key={index}>
                        <div 
                            className="mb-10 lg:mb-0 min-w-64 p-4 rounded-2xl hover:shadow-2xl transition-shadow ease-linear duration-500 cursor-pointer"
                        >
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-64 h-64 mb-2 rounded-xl"
                            />
                            <h5 className="text-xl font-semibold">
                                {product.name.length > 21 
                                    ? `${product.name.slice(0, 21)}...` 
                                    : product.name
                                }
                            </h5>
                            <img 
                                src={product.rating} 
                                alt={`${product.name} rating`}
                                className="h-5 my-2"
                            />
                            <h4 className="text-xl font-semibold">${product.price}</h4>
                        </div>
                    </Link>
                ))}

            </div>

            {currentProducts.length > 0 && (
                <div className="flex justify-between items-center px-8 lg:px-4">
                    <div 
                        className={`flex items-center justify-center border rounded-lg p-2 gap-3 
                            ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} 
                        onClick={handlePrevious}
                    >
                        <img 
                            src={leftArrow} 
                            alt="Left Arrow"
                            className="w-5 h-5" 
                        />
                        <p className="font-medium">Previous</p>
                    </div>
                    <p className="para">
                        Page 
                        <span className="text-black mx-2">{currentPage}</span>
                        of 
                        <span className="text-black ml-2">{totalPages}</span>
                    </p>
                    <div 
                        className={`flex items-center justify-center border rounded-lg p-2 gap-3 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} 
                        onClick={handleNext}
                    >
                        <p className="font-medium">Next</p>
                        <img 
                            src={rightArrow} 
                            alt="Right Arrow" 
                            className="w-5 h-5"
                        />
                    </div>
                </div>
            )}

            <Subscribe />
            <Footer />
        </div>
    );
}
 
export default AllProduct;