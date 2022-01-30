import React, {useEffect} from 'react';
import {Post} from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {LOADING} from "../../constants";
import {getAllPosts} from "../../store";

const Posts = () => {

    const {posts, errors, status} = useSelector(state => state['postsReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};