import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { logIn, googleSignUp, gitSignUp, forgotPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then((userCredential) => {
                toast.success('Login Succesful');
                navigate(from, { replace: true });
                // Signed in 
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

        form.reset()
    }



    // google signup 
    const handlegoogleSignUp = () => {
        googleSignUp()
            .then((result) => {
                toast.success('Login Succesful');
                navigate(from, { replace: true });

            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)

            })

    }
    // git signup 
    const handlegitSignUp = () => {
        gitSignUp()
            .then(result => {
                toast.success('Login Succesful');
                navigate(from, { replace: true });

            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)

            })
    }

    // password reset 
    const hadleForgotPassword = () => {
        const email = prompt('Type Your Email Here')
        forgotPassword(email)
            .then(() => {
                // Password reset email sent!
                toast.success(`Password Reset Email Sent to ${email}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });

    }



    return (
        <div className="w-[90%] mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-200 text-black my-8">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleFormSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-400">Your Email</label>
                    <input type="text" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-100 focus:border-violet-400" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-400">Your Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-100 focus:border-violet-400" required />
                    <div className="flex justify-end text-xs text-gray-400">
                        <Link onClick={hadleForgotPassword} rel="noopener noreferrer" to="#">Forgot Password?</Link>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-black">Login with social accounts</p>
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
            <p className="text-xs text-center sm:px-6 text-black">Don't have an account?
                <Link rel="noopener noreferrer" to="/register" className="underline text-black font-bold"> Sign up</Link>
            </p>
        </div>
    );
};

export default Login;