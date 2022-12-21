import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Course = () => {
    const { courses } = useContext(AuthContext);
    return (
        <>
            {
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                    {
                        courses.map((course, idx) => <div key={idx} className="p-6 rounded-md shadow-lg bg-gray-200 text-black relative transform duration-500 ease-in-out hover:scale-105">
                            <img src={course.picture} alt="course" className="rounded-md h-72 bg-gray-500" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">{course.name}</span>
                                <h2 className="text-xl font-semibold tracking-wide">{course.title}</h2>
                            </div>
                            <p className="text-black mb-8">{course.about}</p>
                            <Link to={`course/${course.id}`}>
                                <button type="button" className="px-8 py-3 font-semibold rounded bg-violet-600 hover:bg-violet-800 text-white absolute inset-x-0 bottom-0 ">Course Details</button>
                            </Link>
                        </div>
                        )
                    }
                </div>
            }
        </>


    );
};

export default Course;