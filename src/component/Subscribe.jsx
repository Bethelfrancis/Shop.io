import email from '../assets/email.png'

const Subscribe = () => {
    return (
        <div className="relative top-16 right-0 left-0 flex mt:flex-col mt:gap-11 items-center justify-between mx-8 lg:mx-4 bg-black px-9 lg:px-2 py-5 rounded-xl">
            <h2 className="htwo text-white w-1/2 mt:w-full mt:text-center">
                stay upto date about our latest offers
            </h2>
            <SubForm />
        </div>
    );
}

export const SubForm = () => {
    return (
        <form className='w-full flex flex-col items-center justify-center px-1'>
            <div className="flex items-center bg-white max-w-full w-96 rounded-3xl p-2 mb-3">
                <img 
                    src={email} 
                    alt="Email Icon" 
                    className="w-5 h-5 mx-2" 
                />
                <input
                    type="email"
                    placeholder="Enter your email address."
                    className="bg-white max-w-full w-64 outline-none border-none text-gray-700"
                />
            </div>
            <button 
                className='bg-white border-none text-black font-semibold max-w-full w-80 py-2 rounded-3xl hover:bg-greys transition-all duration-500 ease-linear'
            >
                Subscribe to Newsletter
            </button>
        </form>
    );
}
 
export default Subscribe;