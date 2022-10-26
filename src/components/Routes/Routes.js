import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../Blog';
import Courses from '../Courses';
import ErrorPage from '../ErrorPage';
import Faq from '../Faq';
import Home from '../Home';
import Login from '../Login';
import Main from '../Main';
import Register from '../Register';
import SingleCourse from '../SingleCourse';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('http://localhost:5000/courses')
                },
                {
                    path: 'courses',
                    element: <Courses></Courses>,
                    loader: () => fetch('http://localhost:5000/courses')
                },
                {
                    path: 'course/:courseId',
                    element: <SingleCourse></SingleCourse>,
                    loader: ({ params }) => fetch(`http://localhost:5000/course/${params.courseId}`)
                },
                {
                    path: 'faq',
                    element: <Faq></Faq>
                },
                {
                    path: 'blogs',
                    element: <Blog></Blog>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;