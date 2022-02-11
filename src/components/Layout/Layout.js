import React from 'react';

import {useSelector} from 'react-redux';
import {NavLink, Outlet} from 'react-router-dom';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import {ThemeSpan} from '../ThemeSpan/ThemeSpan';
import './Layout.css';

const Layout = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    return (
        <div>
            <div className='layout-header'>
                <NavLink to={'/'}><Header/></NavLink>
                <ThemeSpan/>
            </div>

            <div className='outlet'>
                <Outlet/>
            </div>

            <div className={theme === true ? 'layout-footer':'layout-footer_dark-mode'}>
                <Footer/>
            </div>
        </div>
    );
};

export {Layout};