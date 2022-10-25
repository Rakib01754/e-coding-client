import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <h1>This is courses</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;