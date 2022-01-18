import React from 'react';

import "./Comment.css";

const Comment = ({comment: {id, body, email, name}}) => {
    return (
        <div className="comments-box">
            <div>Id: {id}</div>
            <div>Body: {body}</div>
            <div>Email: {email}</div>
            <div>Name: {name}</div>
        </div>
    );
};

export {Comment};