import React from 'react';
import { Link } from 'react-router-dom';

const CourseSample = ({ course }) => {
    const { name, picture } = course;
    return (
        <div className="rounded-md shadow-md bg-gray-200 text-black transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg ">
            <img src={picture} alt="" className="rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>

                </div>
                <Link to={`courses/course/${course.id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-white hover:bg-violet-800">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseSample;