import React from 'react';
import {Link, Outlet, NavLink, useNavigate} from "react-router-dom";
import css from "./Layout.module.css";
import {useAuth} from "../../hooks/userAuth";

const Layout = () => {
    const {logout} = useAuth();

    const navigate = useNavigate();

    const logOutFromApp = () => {
        logout(() => navigate('/', {replace: true}));
    }

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <button onClick={logOutFromApp}>Logout</button>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <div className={css.footer}>
                @ReactRouterDom
            </div>
        </div>
    );
};

export {Layout};