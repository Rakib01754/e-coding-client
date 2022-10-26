import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <>
            <h1 className='text-5xl font-bold text-center underline'>Courses</h1>
            <div className='flex flex-col md:flex-row gap-2'>
                <aside className="w-full p-6 sm:w-60 bg-gray-900 text-gray-100 mt-6">
                    <nav className="space-y-8 text-sm">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold underline tracking-widest uppercase text-gray-400">Courses</h2>
                            <div className="flex flex-col space-y-1">
                                {
                                    courses.map(course => <NavLink to={`/course/${course.id}`} className='font-bold text-xl hover:underline'>{course.name}</NavLink>)
                                }
                            </div>
                        </div>
                    </nav>
                </aside>
                <div className="container flex flex-col justify-center p-4 mx-auto mt-3">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;