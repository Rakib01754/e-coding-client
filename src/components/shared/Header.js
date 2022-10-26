import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Success')
            }).catch((error) => {
                toast.success(error.errorMessage)
            });
    }
    return (

        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 text-gray-100 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                            <img src={Logo} alt="logo" className='w-12 md:w-16' /><span className='ml-2 font-bold text-2xl md:text-3xl text-[#4DB5D1]'>E-Coding</span>
                        </NavLink>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars></FaBars>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-bold">
                            <li className="flex my-2">
                                <NavLink to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink to="/courses" className={({ isActive }) =>
                                    isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Courses</NavLink>
                            </li>
                            <li className="flex  my-2">
                                <NavLink to="/blogs" className={({ isActive }) =>
                                    isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Blogs</NavLink>
                            </li>
                            <li className="flex  my-2">
                                <NavLink to="/faq" className={({ isActive }) =>
                                    isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>Faq</NavLink>
                            </li>
                            <li className="flex">
                                {
                                    (user && user.uid) ?
                                        <>
                                            <img src={user.photoURL} alt="" className="self-center flex-shrink-0 w-13 h-12 mr-2 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" title={user.displayName} />
                                            <button onClick={handleLogOut} className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log Out</button>
                                        </> : <NavLink to="/login" className={({ isActive }) =>
                                            isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'}>
                                            <button className="md:px-8 md:py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log in</button>
                                        </NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>

    );
};

export default Header;


