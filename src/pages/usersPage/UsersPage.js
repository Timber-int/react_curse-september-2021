import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users-axios.service";
import {Outlet} from "react-router-dom";
import {User} from "../../components/User/User";
import "./UsersPage.css";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div className="wrapper">
            <div className="users-container">
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

export {
    UsersPage
};