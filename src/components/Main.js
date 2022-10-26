import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';
import Header from './shared/Header';

const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;