import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, email,userId} = user;
    return (
        <div className="user-box" style={{fontSize: "12px"}}>
            <Link to={id.toString()} state={user}>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <hr/>
            </Link>

            <Link to={id.toString() + '/albums'} state={user}>
                <button>User Albums</button>
            </Link>
        </div>
    );
};

export {User};