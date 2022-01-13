import React from 'react';

import "../styles/Style.css";


const Post = ({post: {id, title, body}}) => {
    return (
        <div className="post-box">
            <center>
                <div>Post: {id}</div>
            </center>
            <div>{id}. {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;