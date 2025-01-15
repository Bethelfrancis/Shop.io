import { useState } from 'react';
import emailIcon from '../assets/email.png'

const Subscribe = () => {
    const [ email, setEmail ] = useState('')

    return (
        <div className="relative top-16 right-0 left-0 flex mt:flex-col mt:gap-11 items-center justify-between mx-8 lg:mx-4 bg-black px-9 mt:px-2 py-5 rounded-xl">
            <h2 className="htwo text-white w-1/2 mt:w-full mt:text-center">
                stay upto date about our latest offers
            </h2>
            <SubForm email={email} setEmail={setEmail} />
        </div>
    );
}

export const SubForm = ({ email, setEmail }) => {
    return (
        <form className='mt:w-full flex flex-col items-center justify-center px-1'>
            <div className="flex items-center bg-white max-w-full w-96 rounded-3xl p-2 mb-3">
                <img 
                    src={emailIcon} 
                    alt="Email Icon" 
                    className="w-5 h-5 mx-2" 
                />
                <input
                    type="email"
                    placeholder="Enter your email address."
                    value={email}
                    className="bg-white max-w-full w-64 outline-none border-none text-gray-700"
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                />
            </div>
            <button 
                className='bg-white border-none text-black font-semibold max-w-full w-96 py-2 rounded-3xl hover:bg-greys transition-all duration-500 ease-linear'
                onClick={e => {
                    e.preventDefault()
                }}
            >
                Subscribe to Newsletter
            </button>
        </form>
    );
}
 
export default Subscribe;