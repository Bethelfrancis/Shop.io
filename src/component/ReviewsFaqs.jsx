import { useState } from "react";
import useFetch from "../customHook/useFetch";
import { Link } from "react-router-dom";

const ReviewsFaqs = () => {
    const [activeTab, setActiveTab] = useState("Reviews");
    const { data:review, isPending, error } = useFetch('https://shop-co-7oze.onrender.com/reviews')
    const { data:faq } = useFetch('https://shop-co-7oze.onrender.com/faq')

    return (
        <div className="px-8 lg:px-4">

            <div className="flex justify-between items-center">
                <p 
                    className={`w-1/2 text-center cursor-pointer transition-all duration-100 ${
                        activeTab === 'Reviews' ? 'border-b-black border-b-2 font-bold text-black' : 'para'
                    }`}
                    onClick={() => setActiveTab('Reviews')}
                >
                    Rating & Reviews
                </p>
                <p 
                    className={`w-1/2 text-center cursor-pointer transition-all duration-100 ${
                        activeTab === 'FAQs' ? 'border-b-black border-b-2 font-bold text-black' : 'para'
                    }`}
                    onClick={() => setActiveTab('FAQs')}
                >
                    FAQs
                </p>
            </div>

            <hr className='bg-greys w-full h-[2px]' />

            {
                activeTab === 'Reviews'
                    ?   <div className="flex sm:flex-col md:justify-center justify-between my-8">
                            <h5 className="text-3xl sm:mb-4 sm:text-center font-semibold">
                                Customer Reviews
                            </h5>

                            <Link 
                                to='/create'
                                className="sm:flex sm:items-center sm:justify-center"
                            >
                                <button 
                                    className="bg-black border-none text-white py-2 px-9 rounded-3xl  hover:bg-text transition-all duration-500 ease-linear"
                                >
                                    Write a Review
                                </button>
                            </Link>
            
                        </div>
                    :   <div className="my-8">
                            <h5 className="text-3xl font-semibold">
                                Frequently Asked Questions
                            </h5>
            
                        </div>
            }

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


            <div className="w-full flex flex-wrap justify-around gap-10 mt-10">
                {
                    activeTab === "Reviews"
                        ?   review && review.map((rev, index) => (
                                <div 
                                    key={index}
                                    className="flex flex-col items-start justify-center h-72 max-w-full w-[390px] rounded-xl border-[2px] border-greys px-6"
                                >
                                    <img 
                                        src={rev.rating} 
                                        alt="5 Star"
                                        className='h-5'
                                    />

                                    <p className='font-bold text-black my-2'>{rev.name}</p>
                                    <p className='para'>
                                        {rev.feedback}
                                    </p>
                                </div>
                            ))
                        :   faq && faq.map((ques, index) => (
                                <div 
                                    key={index}
                                    className="flex flex-col justify-center h-64 max-w-full w-[390px] rounded-xl border-[2px] border-greys px-6"
                                >
                                    <p className='font-bold text-black my-2'>{ques.question}</p>
                                    <p className='para'>
                                        {ques.answer}
                                    </p>
                                </div>
                            ))
                }
            </div>
        </div>
    );

}
 
export default ReviewsFaqs;