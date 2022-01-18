import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name,email,} = user;
    return (
        <div className="user-box" style={{fontSize:"12px"}}>
            <Link to={id.toString()} state={user}>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <hr/>
            </Link>
        </div>
    );
};

export {User};