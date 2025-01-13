import casual from '../assets/casual.png'
import formal from '../assets/formal.png'
import party from '../assets/party.png'
import gym from '../assets/gym.png'
import { useNavigate } from 'react-router-dom'

const BrowseStyle = () => {
    const navigate = useNavigate();

    const handleStyleClick = (style) => {
        navigate(`/style/${style}`)
    }

    return (
        <div className="bg-greys rounded-3xl text-center mx-8 lg:mx-4 p-10 mt:p-4">
            <h2 className="htwo mb-14">
                browse by dress style
            </h2>
            <div className='flex mt:flex-col items-center justify-between mb-4 mt:space-y-4'>
                <div 
                    className='relative w-[39%] mt:w-full rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md'
                    onClick={() => handleStyleClick('casual')}    
                >
                    <img 
                        src={casual} 
                        alt="Casual Dress"
                        className='h-56 w-full object-cover rounded-xl'
                    />
                    <h2 className='text-3xl font-bold absolute top-3 left-5'>Casual</h2>
                </div>
                <div 
                    className='relative w-[59%] mt:w-full rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md'
                    onClick={() => handleStyleClick('formal')}     
                >
                    <img 
                        src={formal} 
                        alt="Formal Dress"
                        className='h-56 w-full object-cover rounded-xl'
                    />
                    <h2 className='text-3xl font-bold absolute top-3 left-5'>Formal</h2>
                </div>
            </div>
            <div className='flex mt:flex-col items-center justify-between mb-4 mt:space-y-4'>
                <div 
                    className='relative w-[59%] mt:w-full rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md'
                    onClick={() => handleStyleClick('party')} 
                >
                    <img 
                        src={party} 
                        alt="Party Dress"
                        className='h-56 w-full object-cover rounded-xl'
                    />
                    <h2 className='text-3xl font-bold absolute top-3 left-5'>Party</h2>
                </div>
                <div 
                    className='relative w-[39%] mt:w-full rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl shadow-md'
                    onClick={() => handleStyleClick('gym')} 
                >
                    <img 
                        src={gym} 
                        alt="Gym Dress"
                        className='h-56 w-full object-cover rounded-xl'
                    />
                    <h2 className='text-3xl font-bold absolute top-3 left-5'>Gym</h2>
                </div>
            </div>
        </div>
    );
}
 
export default BrowseStyle;