import React from 'react';

import {Header} from '../Header/Header';
import {NavLink, Outlet} from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <div className='layout-header'>
                <NavLink to={'/'}><Header/></NavLink>
            </div>

            <div className='outlet'>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};