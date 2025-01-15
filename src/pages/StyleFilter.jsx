import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../customHook/useFetch";
import SideBar from "../component/SideBar";
import Subscribe from "../component/Subscribe";
import Footer from "../component/Footer";
import filter from "../assets/filter.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const StyleFilter = () => {
    const { styleType } = useParams();
    const { data: products, isPending, error } = useFetch('https://shop-co-7oze.onrender.com/product');
    const [ isVisible, setIsVisible ] = useState(false);

    const [ currentPage, setCurrentPage ] = useState(1);
    const itemsPerPage = 6;

    const toggleVisible = () => {
        if (!isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [styleType]);

    const filterStyle = products && Array.isArray(products)
        ? products.filter(style => style.type === styleType)
        : [];

    const nextProduct = currentPage * itemsPerPage;
    const firstPage = nextProduct - itemsPerPage;
    const currentProducts = filterStyle.slice(firstPage, nextProduct);

    const totalPages = Math.ceil(filterStyle.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="pt-16 overflow-x-hidden">
            <hr className='bg-greys h-[2px] mx-8 lg:mx-4' />

            <div className="flex pr-8 lg:pr-4">
                <SideBar isVisible={isVisible} toggleVisible={toggleVisible} />

                {isPending && (
                    <div className="flex items-center justify-center w-full">
                        <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="flex items-center justify-center w-full">
                        <p className="text-2xl font-semibold text-red-500 text-center">{error}</p>
                    </div>
                )}

                <div className={`pt-7 ${
                    currentProducts.length > 0
                        ? 'w-full'
                        : 'w-0'
                }`}>

                    {currentProducts.length > 0 && (
                        <div className="flex justify-between items-center">
                            <h2 className="htwo ml-10 lg:ml-4">{styleType}</h2>
                            <img 
                                src={filter} 
                                alt="Filter Icon"
                                className="hidden lg:block"
                                onClick={toggleVisible}
                            />
                        </div>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-11 lg:gap-8">
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
                        <div className="flex justify-between lg:ml-3 ml-6 mt-4">
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
                    
                </div>
            </div>

            <Subscribe />
            <Footer />
        </div>
    );
}

export default StyleFilter;