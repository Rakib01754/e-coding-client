import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='mt-8 mb-0'>
            <footer className="px-4 py-5 bg-gray-800 text-gray-400">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
                            <img src={Logo} alt="logo" className='w-12 md:w-16' />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <Link to="/">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li>
                            <a href="https://www.instagram.com/">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;