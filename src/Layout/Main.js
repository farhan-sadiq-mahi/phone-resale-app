import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />

        </div>
    );
};

export default Main;