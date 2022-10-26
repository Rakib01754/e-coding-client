import React from 'react';

const Course = ({ course }) => {
    const { title, picture, name, about } = course;
    return (

        <div className="max-w-xs p-6 rounded-md shadow-lg bg-gray-200 text-black relative">
            <img src={picture} alt="course" className="w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">{name}</span>
                <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
            </div>
            <p className="text-black mb-8">{about}</p>
            <button type="button" className="px-8 py-3 font-semibold rounded bg-violet-600 hover:bg-orange-600 text-white absolute inset-x-0 bottom-0 ">Course Details</button>
        </div>

    );
};

export default Course;