import React from 'react';
import Lottie from "lottie-react";
import img from '../assets/learning.json'
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <div className='my-16'>
            <div className='mx-5 flex flex-col md:flex-row px-5 items-center'>
                <Lottie animationData={img} loop={true} className='w-full md:w-[40%]'></Lottie>
                <div className=' w-full md:w-[60%]'>
                    <h2 className='text-2xl md:text-6xl font-bold'>
                        {''}
                        <Typewriter
                            words={["Let's Learn From Online"]}
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        />
                    </h2>
                    <p className='md:text-xl mt-3'>
                        E-coding is a online learning platform,Various types of programming courses are available here for learn.You can Learn Python, Javascript, Php, Kotlin, C#, C++ from here. Learn Programming and grow your skill.
                    </p>
                    <NavLink to='/courses'>
                        <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100  text-white dark:text-gray-100 bg-[#4DB6D2] mt-5">Start Learning</button>
                    </NavLink>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold mt-2'>Our Popular Courses</h2>
            </div>
        </div>
    );
};

export default Home;