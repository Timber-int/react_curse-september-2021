import React from "react";

import {NavLink, Outlet} from "react-router-dom";
import css from "./Layout.module.css";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/cars'}>Cars</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>

    );
};

export {Layout};