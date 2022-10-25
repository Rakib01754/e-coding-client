import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 bg-gray-800 text-gray-400">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
                            <img src={Logo} alt="logo" className='w-12 md:w-16' />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <Link rel="noopener noreferrer" to="/">Terms of Use</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <Link rel="noopener noreferrer" to="https://www.instagram.com/">Instagram</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" to="https://www.facebook.com/">Facebook</Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" to="https://www.twitter.com/">Twitter</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;