import fiveStar from '../assets/five-star.png'

const Customer = () => {
    return (
        <div className="px-8 lg:px-4 mt-16 mb-3 overflow-auto ">
            <CustHead />
            <CusReview />
        </div>
    );
}

const CustHead = () => {
    return(
        <div className='flex'>
            <h2 className="htwo w-full">
                our happy Customers
            </h2>
        </div>
    )
}

const CusReview = () => {
    return (
        <div className='w-full flex overflow-auto space-x-10 mt-10'>
            <div className='flex flex-col items-start justify-center h-72 min-w-96 rounded-xl border-[2px] border-greys px-6'>
                <img 
                    src={fiveStar} 
                    alt="5 Star"
                    className='h-5'
                />
                <p className='font-bold text-black my-2'>Sarah M.</p>
                <p className='para'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit labore, modi esse odit excepturi autem corrupti debitis suscipit eos maxime, eum mollitia neque quae voluptatum maiores voluptatem facilis laboriosam.
                </p>
            </div>
            <div className='flex flex-col items-start justify-center h-72 min-w-96 rounded-xl border-[2px] border-greys px-6'>
                <img 
                    src={fiveStar} 
                    alt="5 Star"
                    className='h-5'
                />
                <p className='font-bold text-black my-2'>Sarah M.</p>
                <p className='para'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit labore, modi esse odit excepturi autem corrupti debitis suscipit eos maxime, eum mollitia neque quae voluptatum maiores voluptatem facilis laboriosam.
                </p>
            </div>
            <div className='flex flex-col items-start justify-center h-72 min-w-96 rounded-xl border-[2px] border-greys px-6'>
                <img 
                    src={fiveStar} 
                    alt="5 Star"
                    className='h-5'
                />
                <p className='font-bold text-black my-2'>Sarah M.</p>
                <p className='para'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit labore, modi esse odit excepturi autem corrupti debitis suscipit eos maxime, eum mollitia neque quae voluptatum maiores voluptatem facilis laboriosam.
                </p>
            </div>
        </div>
    );
}
 
export default Customer;