import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ title, product = [], id }) => {
    return (
        <div 
            className='flex flex-col items-center pt-12 px-8 lg:px-4 overflow-auto'
        >
            <h2 className="htwo">{ title }</h2>
            <Products id={id} product={product} />
            <ViewAll />
        </div>
    );
}

const Products = ({ product, id }) => {
    const shuffledProduct = [...product].sort(() => 0.5 - Math.random())
    const randomProduct = shuffledProduct.slice(0, 4);

    return (
        <div 
            id={id}
            className='w-full flex justify-between gap-9 my-8 overflow-auto'
        >
            {randomProduct.map((data, index) => (
                <Link to={`/product/${data.id}`}>
                    <div 
                        key={index} 
                        className='mb-10 min-w-64 p-4 rounded-2xl hover:shadow-2xl transition-shadow ease-linear duration-500 cursor-pointer'
                    >
                        <img 
                            src={data.image} 
                            alt={data.name}
                            className='w-64 h-64 mb-2 rounded-xl'
                        />
                        <h5 className='text-xl font-semibold break-words'>{data.name}</h5>
                        <img 
                            src={data.rating} 
                            alt={data.name}
                            className='h-5 my-2'
                        />
                        <h4 className='text-xl font-semibold'>${data.price}</h4>
                    </div>
                </Link>
            ))}
        </div>
    );
}

const ViewAll = () => {
    return (
        <Fragment>
            <Link to='/allproducts'>
                <button 
                    className='border border-gray-300 rounded-3xl px-14 py-2 hover:shadow-xl transition-all duration-1000 ease-in-out'
                >
                    View All
                </button>
            </Link>
            <hr className='bg-greys w-full h-[2px] mt-14'/>
        </Fragment>
    );
}

export default Product;