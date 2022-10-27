import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../Blog';
import CheckOut from '../CheckOut';
import Course from '../Course';
import Courses from '../Courses';
import ErrorPage from '../ErrorPage';
import Faq from '../Faq';
import Home from '../Home';
import Login from '../Login';
import Main from '../Main';
import PrivateRoute from '../PrivateRoute';
import Profile from '../Profile';
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