import React from 'react';
import {Link} from "react-router-dom";
import "./Post.css";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className="post-box">
            <Link to={id.toString()} state={post}>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </Link>
        </div>
    );
};

export {Post};