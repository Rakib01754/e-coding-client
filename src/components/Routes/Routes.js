import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../Blog';
import Course from '../Course';
import Courses from '../Courses';
import ErrorPage from '../ErrorPage';
import Faq from '../Faq';
import Home from '../Home';
import Login from '../Login';
import Main from '../Main';
import Register from '../Register';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'courses',
                    element: <Courses></Courses>,
                    children: [
                        {
                            path: 'course',
                            element: <Course></Course>
                        }
                    ]
                },
                {
                    path: 'faq',
                    element: <Faq></Faq>
                },
                {
                    path: 'blog',
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