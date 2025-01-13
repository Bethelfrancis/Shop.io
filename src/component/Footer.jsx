import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import visa from '../assets/visa.png'
import verse from '../assets/verse.png'
import paypal from '../assets/paypal.png'
import epay from '../assets/epay.png'
import gpay from '../assets/gpay.png'

const Footer = () => {
    const social = [
        twitter,facebook,instagram,github
    ]

    const org = [
        visa,verse,paypal,epay,gpay
    ]

    return (
        <div className="bg-greys pt-32 px-8 lg:px-4">
            <div className="w-full flex lg:flex-col justify-between mb-11">
                <div className='w-full'>
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className='w-32 mb-5'
                    />
                    <p className='para w-[76%] md:w-full'>
                        We have clothes that suits your style and which you're proud to wear. From women to men.
                    </p>
                    <div className='flex space-x-4 mt-9 lg:mt-4'>
                        {social.map((img, index) => (
                            <img 
                                key={index}
                                src={img} 
                                alt='Social Logo' 
                                className='w-7 rounded-full cursor-pointer hover:shadow-xl hover:scale-125 transition-all duration-500'
                            />
                        ))}
                    </div>
                </div>
                <div className='w-full flex lg:my-9 mr-40 lg:pr-5 justify-between'>
                    <ul className='para space-y-3'>
                        <p className='font-semibold text-black uppercase mb-2'>company</p>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer'>Works</li>
                        <li className='cursor-pointer'>Career</li>
                    </ul>
                    <ul className='para space-y-3'>
                        <p className='font-semibold text-black uppercase mb-2'>help</p>
                        <li className='cursor-pointer'>Customer Support</li>
                        <li className='cursor-pointer'>Delivery Details</li>
                        <li className='cursor-pointer'>Terms & Condition</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='w-full flex justify-between lg:pr-0'>
                    <ul className='para space-y-3'>
                        <p className='font-semibold text-black uppercase mb-2'>faq</p>
                        <li className='cursor-pointer'>Account</li>
                        <li className='cursor-pointer'>Manage Deliveries</li>
                        <li className='cursor-pointer'>Orders</li>
                        <li className='cursor-pointer'>Payment</li>
                    </ul>
                    <ul className='para space-y-3'>
                        <p className='font-semibold text-black uppercase mb-2'>resources</p>
                        <li className='cursor-pointer'>Free eBooks</li>
                        <li className='cursor-pointer'>Development Tutorial</li>
                        <li className='cursor-pointer'>How to - Blog</li>
                        <li className='cursor-pointer'>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <hr className='bg-text w-full h-[1.5px]'/>
            <div className='flex mt:flex-col justify-between items-center mt-2'>
                <p className='para'>Shop.io &copy; 2000-2025. All Right Reserved</p>
                <div className='flex'>
                    {org.map((img, index) => (
                        <img 
                            key={index}
                            src={img}
                            alt='Organization Logo'
                            className='mt:mt-4'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Footer;