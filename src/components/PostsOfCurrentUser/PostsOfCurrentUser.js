import React from 'react';
import {ChosenUserPost} from "../ChousenUserPost/ChousenUserPost";

const PostsOfCurrentUser = ({posts}) => {
    return (
        <div>
            {posts.map(post => <ChosenUserPost post={post} key={post.id}/>)}
        </div>
    );
};

export {PostsOfCurrentUser}