import React from "react";

import css from "./Comment.module.css";

const Comment = ({comment: {body, name, email}}) => {
    return (
        <div className={css.box}>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};