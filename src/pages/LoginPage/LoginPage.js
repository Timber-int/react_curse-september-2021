import React from 'react';
import {useAuth} from "../../hooks/userAuth";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {

    const {login} = useAuth();

    const navigate = useNavigate();

    const {state: {pathname}} = useLocation();

    const onSubmit = (e) => {
        e.preventDefault();
        const user = e.target.username.value;
        login(user, () => navigate(pathname), {replace: true});
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label><input type="login" name={'username'}/></label>
                <button>Login</button>
            </form>
        </div>
    );
};

export {LoginPage};