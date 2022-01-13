import React from 'react';

import Post from "../post/Post";
import "./Posts.css";

const Posts = ({posts}) => {
    return (
        <div className="posts-container">
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;