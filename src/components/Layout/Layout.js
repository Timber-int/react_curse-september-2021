import React from 'react';

import css from './Layout.module.css';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Ricky and Morty</NavLink>
            </div>

            <div className={css.content}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};