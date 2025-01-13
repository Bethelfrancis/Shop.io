import { useState } from 'react';
import logo from '../assets/logo.png'
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png";
import avatar from "../assets/avatar.png";
import down from "../assets/down.png";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const handleToggle = () => {
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className='fixed flex items-center justify-between bg-white px-8 w-full h-16 lg:pl-14 lg:px-3 z-30'>
            <Hambuger isOpen={isOpen} handleToggle={handleToggle} />
            <Link to='/'>
                <img 
                    src={logo}
                    alt='Logo'
                    className='max-w-full md:w-28 cursor-pointer'
                />
            </Link>
            <Catergories isOpen={isOpen} handleToggle={handleToggle} setIsOpen={setIsOpen} />
            <Profile />
        </div>
    );
}

const Hambuger = ({ isOpen, handleToggle }) => {
    return(
        <div 
            className='space-y-1 absolute hidden lg:block left-3 z-20' 
            onClick={handleToggle}
        >
            <span className={`block w-8 h-[3px] bg-black transition-all duration-700 ${isOpen ? 'rotate-[45deg] -translate-x-2 translate-y-2 bg-white' : ''}`}></span>
            <span className={`block w-8 h-[3px] bg-black transition-all duration-700 ${isOpen ? 'opacity-0 bg-white' : ''}`}></span>
            <span className={`block w-8 h-[3px] bg-black transition-all duration-700 ${isOpen ? '-rotate-[45deg] -translate-x-2 -translate-y-[5px] bg-white' : ''}`}></span>
        </div>
    )
}

const Catergories = ({ isOpen, handleToggle, setIsOpen }) => {
    const [isDrop, setIsDrop] = useState(false);
    const [selected, setSelected] = useState("Shop");
    const navigate = useNavigate()

    const options = ["Shop", "Men", "Women"];

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsDrop(false);
        if (option !== "Shop") {
            navigate(`/category/${option.toLowerCase()}`)
        } else {
            navigate('/')
        }
        handleToggle()
    };

    const handleLinkClose = () => {
        handleToggle()
    }

    const handleGoBack = () => {
        navigate(-1)
        handleToggle()
    }

    const handleHome = () => {
        navigate('/')
        handleToggle()
    }

    return (
        <ul className={`flex space-x-6 lg:items-center lg:w-[80%] lg:h-[100vh] lg:bg-text lg:flex-col lg:absolute top-0 lg:space-x-0 lg:text-white transition-all duration-700 lg:justify-around lg:z-10 ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
            <Dropdown 
                options={options} 
                handleOptionClick={handleOptionClick} 
                isOpen={isDrop} 
                selected={selected}   
                setIsOpen={setIsDrop}  
            />
            <li 
                className='cursor-pointer lg:hidden'
                onClick={handleLinkClose}
            >
                    <a href='#new-arrivals'>New Arrivals</a>
            </li>
            <li 
                className='cursor-pointer lg:hidden'
                onClick={handleLinkClose}
            >
                <a href='#top-sale'>Top Sale</a>
            </li>
            <li 
                className='cursor-pointer lg:hidden'
                onClick={handleLinkClose}
            >
                <a href='#brands'>Brands</a>
            </li>
            <li 
                className='cursor-pointer hidden lg:block'
                onClick={handleGoBack}
            >
                Go Back
            </li>
            <li 
                className='cursor-pointer hidden lg:block'
                onClick={handleHome}
            >
                Home
            </li>
        </ul>
    );
}

const Dropdown = ({ options = [], handleOptionClick, isOpen, selected, setIsOpen }) => {
    return (
        <li className="relative list-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-fit"
            >
                {selected}
                <img 
                    src={down}
                    alt='Down Arrow'
                    className={`ml-2 transition-transform ${isOpen ? "rotate-0" : "-rotate-180"}`}
                />
            </button>

            
            <ul 
                className={`drop ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
            >
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="px-4 py-2 lg:py-1 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </li>
    );
};

const Profile = () => {
    const [ isSearch, setIsSearch ] = useState(false);

    const handleSearch = () => {
        setIsSearch(!isSearch)
    }

    return (
        <div className='flex items-center gap-5'>
            <div 
                className={`flex md:absolute md:mx-auto left-0 right-0 items-center bg-greys max-w-full w-80 rounded-3xl shadow-md p-2 transition-all duration-700 ${isSearch ? 'top-14' : '-top-14'}`}
            >
                <img 
                    src={searchIcon} 
                    alt="Search" 
                    className="w-5 h-5 mx-2 cursor-pointer" 
                />
                <input
                    type="text"
                    placeholder="Search for products.." 
                    className="bg-greys w-64 outline-none border-none text-gray-700"
                />
            </div>
            <div className='flex items-center gap-4'>
                <img 
                    src={searchIcon} 
                    alt="Search" 
                    className="w-6 h-6 hover:shadow-lg rounded-full cursor-pointer mx-2 hidden md:block"
                    onClick={handleSearch} 
                />
                <Link to='/cart'>
                    <img 
                        src={cartIcon} 
                        alt="Cart Icon"
                        className='w-6 h-6 hover:shadow-lg rounded-full cursor-pointer'
                    />
                </Link>
                <img 
                    src={avatar} 
                    alt="Profile Avatar" 
                    className='w-6 h-6 hover:shadow-lg rounded-full cursor-pointer'
                />
            </div>
        </div>
    );
};

export default Navbar;