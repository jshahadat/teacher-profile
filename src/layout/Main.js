import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Sheared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div>

                <div className='pb-20'>
                    <Navbar ></Navbar>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;