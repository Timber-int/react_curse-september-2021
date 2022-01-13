import React from 'react';

import "../styles/Style.css";


const User = ({user: {id, name}, getUserDetails}) => {


    return (
        <div className="user-box">
            <div>{id}. {name}</div>
            <button onClick={() => getUserDetails(id)}>Details</button>
        </div>
    );
};

export default User;