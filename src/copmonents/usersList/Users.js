import React from 'react';

import User from "./user/User";
import "./Users.css";

const Users = ({users}) => {
    return (
        <div className="users-container">
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
