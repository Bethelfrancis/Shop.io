import filter from '../assets/filter.png'
import right from '../assets/right.png'
import cancel from '../assets/cancel.png'
import { useState } from 'react';

const SideBar = ({ isVisible, toggleVisible }) => {
    const [price, setPrice] = useState(300);

    const handleRangeChange = (value) => {
        setPrice(value);
    };

    return (
        <div 
            className={`lg:fixed lg:left-0 lg:bottom-0 lg:w-full max-w-full w-96 h-full lg:bg-white lg:shadow-2xl py-5 px-5 ml-8 lg:ml-0 lg:z-40 border rounded-2xl mt-10 lg:overflow-y-auto transition-transform duration-500 ease-in-out 
                ${isVisible ? 'lg:translate-y-0' : 'lg:translate-y-full'} translate-y-0
            `}
        >
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-semibold'>
                    Filter
                </h3>
                <img
                    src={filter} 
                    alt="Filter"
                    className='lg:hidden'
                />
                <img
                    src={cancel} 
                    alt="Cancel"
                    className='hidden lg:block w-5'
                    onClick={toggleVisible}
                />
            </div>
            <hr className='bg-greys h-[2px] my-5' />
            <div className='space-y-4'>
                {['T-shirt', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((clothe, index) => (
                    <div
                        key={index} 
                        className='flex items-center justify-between'
                    >
                        <p className='para'>{clothe}</p>
                        <img 
                            src={right} 
                            alt="Right Arrow" 
                            className='-rotate-90'
                        />
                    </div>
                ))}
            </div>
            <hr className='bg-greys h-[2px] my-5' />
            <div className='space-y-2'>
                <div className='flex items-center justify-between mb-3'>
                    <h5 className='text-xl font-semibold'>Price</h5>
                    <img 
                        src={right} 
                        alt="Right Arrow" 
                        className='-rotate-90'
                    />
                </div>
                <div className="relative">
                    <input 
                        type="range" 
                        className="w-full appearance-none h-2 bg-black rounded-lg focus:outline-none"
                        min="0"
                        max="300"
                        step="1"
                        onInput={(e) => handleRangeChange(e.target.value)}
                    />
                </div>
                <span className="text-lg font-semibold">
                    ${price}
                </span>
            </div>
            <hr className='bg-greys h-[2px] my-5' />
            <div className='space-y-2'>
                <div className='flex items-center justify-between mb-4'>
                    <h5 className='text-xl font-semibold'>Dress Style</h5>
                    <img 
                        src={right} 
                        alt="Right Arrow" 
                        className='-rotate-90'
                    />
                </div>
                <div className='space-y-4'>
                    {['Casual', 'Formal', 'Party', 'Gym'].map((clothe, index) => (
                        <div
                            key={index} 
                            className='flex items-center justify-between'
                        >
                            <p className='para'>{clothe}</p>
                            <img 
                                src={right} 
                                alt="Right Arrow" 
                                className='-rotate-90'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button 
                className="bg-black w-full border-none text-white py-2 mt-7 rounded-3xl hover:bg-text transition-all duration-500 ease-linear"
            >
                    Apply Filter
            </button>
        </div>
    );
}
 
export default SideBar;