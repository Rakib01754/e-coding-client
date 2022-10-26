import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, googleSignUp, gitSignUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success('Account Created Succesfully')
                updateProfile(user, {
                    displayName: name, photoURL: photoURL
                }).then(() => {
                    toast.success('profile Updated')
                    navigate('/')
                }).catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
        form.reset();
    }

    // providers
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    // google signup 
    const handlegoogleSignUp = () => {
        googleSignUp(googleProvider)
    }
    // git signup 
    const handlegitSignUp = () => {
        gitSignUp(gitProvider)
    }


    return (
        <div className="w-[90%] mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-200 text-black my-8">
            <h1 className="text-2xl font-bold text-center">Sign Up Here</h1>
            <form onSubmit={handleFormSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-gray-400">Your Full Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border border-white bg-gray-900 text-gray-100 focus:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-400">Photo Url</label>
                    <input type="text" name="photourl" id="photourl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-white bg-gray-900 text-gray-100 focus:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-400">Your Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-white bg-gray-900 text-gray-100 focus:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">Your Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-white bg-gray-900 text-gray-100 focus:border-violet-400" required />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Register</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-black">Sign Up with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handlegoogleSignUp} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <FaGoogle className='text-2xl' />
                </button>
                <button onClick={handlegitSignUp} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                    <FaGithub className='text-2xl' />
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-black">Have an account?
                <Link rel="noopener noreferrer" to="/login" className="underline text-black font-bold"> Log in </Link>
            </p>
        </div>
    );
};

export default Register;