import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Subscribe from "../component/Subscribe"
import Footer from "../component/Footer"
import fiveStar from '../assets/five-star.png'

const CreateReview = () => {
    const [ name, setName ] = useState('')
    const [ feedback, setFeedback ] = useState('')
    const [ rating, ] = useState(fiveStar)
    const [ isPending, setIsPending ] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        const review = { name, feedback, rating }
        setIsPending(true)

        fetch('https://shop-co-7oze.onrender.com/reviews', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(review)
        })
        .then(() => {
            setIsPending(false)
            navigate(-1)
        })
    }

    return (
        <div className="pt-20">
            <h1 className="text-3xl font-semibold mb-4 ml-8 lg:ml-4">Write Your Review</h1>
            <div className="flex flex-col items-center justify-center px-8 lg:px-4 ">  
                <form onSubmit={handleSubmit} className="max-w-full w-full bg-white p-6 rounded-lg shadow-lg"> 
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label> 
                        <input 
                            type="text" 
                            className="w-full  md:h-8 p-2 border border-gray-300 rounded" 
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        /> 
                    </div> 
                    <div className="mb-4"> 
                        <label className="block text-gray-700 mb-2">Description</label> 
                        <textarea 
                            className="w-full p-2 border border-gray-300 rounded" 
                            required
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                        /> 
                    </div>
                    <button 
                        type="submit" 
                        className="bg-black text-white px-4 py-2 rounded hover:bg-text transition duration-500"
                    >
                        { !isPending ? 'Add Review' : 'Adding Review...' }
                    </button>
                </form>
            </div>

            <Subscribe />
            <Footer />
        </div>
    )
}
 
export default CreateReview;