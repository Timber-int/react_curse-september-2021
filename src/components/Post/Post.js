import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const {title, id} = post
    return (
        <div>
            <Link to={id.toString()} state={post}>Title: {title}</Link>
        </div>
    );
};

export {Post};