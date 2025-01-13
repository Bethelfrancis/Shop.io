import heroPic from '../assets/home-pic.png'

const Hero = () => {
    const records = [
        {
            num: '200+',
            text: 'International Brands'
        },
        {
            num: '2,000+',
            text: 'High-Quality Products'
        },
        {
            num: '30,000+',
            text: 'Happy Customers'
        }
    ]


    return (
        <div className="bg-greys flex lg:flex-col items-center justify-between pt-16 pl-8 lg:pl-4">
            <Text records={records} />
            <Img />
        </div>
    );
}

const Text = ({ records }) => {
    return (
        <div className='w-1/2 lg:w-full pr-8 lg:pr-4 lg:py-12'>
            <h1 className="text-4xl font-bold uppercase">
                find clothes that matches your style
            </h1>
            <p className='para lg:w-[100%] my-5 w-text'>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className='bg-black lg:w-full lg:py-3 lg:font-bold border-none text-white py-2 px-10 rounded-3xl hover:bg-text transition-all duration-500 ease-linear'>
                Shop Now
            </button>
            <div className='flex mt-11 space-x-10 lg:justify-center flex-wrap'>
                {records.map((e, index) => (
                    <div key={index} className='mb-5 md:text-center md:flex-1'>
                        <h3 className='font-bold text-3xl'>{e.num}</h3>
                        <p className='para'>{e.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

const Img = () => {
    return (
        <div className='pt-8'>
            <img 
                src={heroPic}
                alt="Hero Img"
                className='max-w-full w-hero max-h-full h-hero object-cover' 
            />
        </div>
    );
}

export default Hero;