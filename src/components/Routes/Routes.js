import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../NavComponents/Blog';
import CheckOut from '../CourseComponents/CheckOut';
import Course from '../CourseComponents/Course';
import Courses from '../CourseComponents/Courses';
import ErrorPage from '../OtherComponents/ErrorPage';
import Faq from '../NavComponents/Faq';
import Home from '../NavComponents/Home';
import Login from '../NavComponents/Login';
import Main from '../OtherComponents/Main';
import PrivateRoute from '../OtherComponents/PrivateRoute';
import Profile from '../OtherComponents/Profile';
import Register from '../OtherComponents/Register';
import SingleCourse from '../CourseComponents/SingleCourse';

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
                },
                {
                    path: 'courses',
                    element: <Courses></Courses>,
                    children: [
                        {
                            path: '/courses',
                            element: <Course></Course>
                        },
                        {
                            path: 'course/:courseId',
                            element: <SingleCourse></SingleCourse>,
                            loader: ({ params }) => fetch(`https://assignment10-e-coding-server.vercel.app/course/${params.courseId}`)
                        }
                    ]
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
                },
                {
                    path: 'checkout/:id',
                    loader: ({ params }) => fetch(`https://assignment10-e-coding-server.vercel.app/course/${params.id}`),
                    element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
                },
                {
                    path: 'profile',
                    element: <Profile></Profile>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;