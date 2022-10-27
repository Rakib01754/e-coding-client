import React from 'react';
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Courses = () => {
    const { courses } = useContext(AuthContext);
    return (
        <>
            <h1 className='text-5xl font-bold text-center underline'>Courses</h1>
            <div className='flex flex-col md:flex-row gap-2'>
                <aside className="w-full md:w-[25%] p-6 bg-gray-900 text-gray-100 mt-6">
                    <nav className="space-y-8 text-sm">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold underline tracking-widest uppercase text-gray-400">Courses</h2>
                            <div className="flex flex-col space-y-1">
                                {
                                    courses.map(course => <NavLink key={course.id} to={`course/${course.id}`} className='font-bold text-xl hover:underline'>{course.name}</NavLink>)
                                }
                            </div>
                        </div>
                    </nav>
                </aside>
                <div className="container flex flex-col justify-center p-4 mx-auto mt-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Courses;