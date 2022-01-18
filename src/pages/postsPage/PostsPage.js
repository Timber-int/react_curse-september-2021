import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts-axios.service";
import {Post} from "../../components/Post/Post";
import {Outlet} from "react-router-dom";
import "./PostsPage.css";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts([...value]));
    }, []);

    return (
        <div className="posts-wrapper">
            <div className="posts-container">
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>

            <div className="full-content">
                <Outlet/>
            </div>
        </div>

    );
};

export {PostsPage}