import React from 'react';
import css from "./Layout.module.css";
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

            <div className={css.footer}>
                Vetal@BEST_MENTOR
            </div>

        </div>
    );
};

export {Layout};