import React from 'react';

import "./User.css";

const User = ({user:{id,name,username,email}}) => {
    return (
        <div className="user-box">
            {id}  {name}--{username}--{email}
        </div>
    );
};

export default User;