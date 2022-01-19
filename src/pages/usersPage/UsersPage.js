import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users-axios.service";
import {Outlet} from "react-router-dom";
import {User} from "../../components/User/User";
import "./UsersPage.css";
import {Albums} from "../../components/Albums/Albums";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers([...value]));
    }, []);

    const getAlbumsOfUser = (id) => {
        usersService.getAlbumsById(id).then(value => setAlbums([...value]));
    }

    return (
        <div className="wrapper">

            <div className="albums-container">
                <Albums albums={albums}/>
            </div>

            <div className="users-container">
                {
                    users.map(user => <User key={user.id} user={user} getAlbumsOfUser={getAlbumsOfUser}/>)
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