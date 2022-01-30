import React from "react";

import css from "./Post.module.css";

const Post = ({post: {title, body}}) => {
    return (
        <div className={css.box}>
            <center>
                <div>Title: {title}</div>
            </center>
            <div>{body};</div>
            <hr/>
        </div>
    );
};

export {Post};