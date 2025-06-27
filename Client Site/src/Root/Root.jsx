import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Header/Navbar';
import Footer from '../Component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;