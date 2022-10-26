import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (

        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={Logo} alt="logo" className='w-12 md:w-16' /><span className='ml-2 font-bold text-2xl md:text-3xl text-[#4DB5D1]'>E-Coding</span>
                </NavLink>
                <div className='flex items-center'>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/courses" className={({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Courses</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/blogs" className={({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Blogs</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/faq" className={({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Faq</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to="/login" className={({ isActive }) =>
                                isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>
                                <button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
                            </NavLink>
                        </li>
                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                    </label>
                </div>
            </div>
        </header>

    );
};

export default Header;


