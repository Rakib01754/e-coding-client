import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'



const Header = () => {
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={Logo} alt="site logo" /> <span className='font-bold text-[#4DB6D2] text-3xl ml-3'>E-coding</span>
                    </NavLink>
                    <ul className="items-stretch hidden space-x-3 lg:flex font-bold text-[#4DB6D2]">
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/courses" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/faq" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</NavLink>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <Link to='/login'>
                            <button className="self-center px-8 py-3 rounded font-bold text-[#4DB6D2]">Log in</button>
                        </Link>
                        <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer bg-gray-300 text-white">
                            <input id="Toggle4" type="checkbox" className="hidden peer" />
                            <span className="px-4 py-2 bg-gray-600 peer-checked:bg-gray-300">Light</span>
                            <span className="px-4 py-2 bg-gray-300 peer-checked:bg-violet-400">Dark</span>
                        </label>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;