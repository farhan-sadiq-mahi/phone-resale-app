import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer';
import Navbar from '../SharedComponent/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;