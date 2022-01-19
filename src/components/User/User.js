import React from 'react';
import {Link} from "react-router-dom";

const User = ({user, getAlbumsOfUser}) => {
    const {id, name, email,} = user;
    return (
        <div className="user-box" style={{fontSize: "12px"}}>
            <Link to={id.toString()} state={user}>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
            </Link>
            <button onClick={() => getAlbumsOfUser(id)}>Get albums</button>
            <hr/>
        </div>
    );
};

export {User};