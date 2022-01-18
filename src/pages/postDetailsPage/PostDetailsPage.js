import React, {useEffect, useState} from 'react';

import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../../services/posts-axios.service";
import {Comments} from "../../components/Comments/Comments";
import "./PostDetailsPage.css";

const PostDetailsPage = () => {
    const params = useParams();

    const {state} = useLocation();

    const {id} = params;

    const [post, setPost] = useState(null);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }
        postsService.getById(id).then(value => setPost({...value}));
    }, [id]);

    const getAllCommentsOfPost = () => {
        postsService.getCommentsById(id).then(value => setComments([...value]));
    }

    return (
        <div className="post_details-box">
            {
                post && (
                    <div>
                        <div>
                            <div className="detail_post-info">
                                <div>Id: {id}</div>
                                <div>Title: {post.title}</div>
                                <div>Body: {post.body}</div>
                                <div>UserId: {post.userId}</div>
                            </div>

                            <div>
                                <center><button onClick={getAllCommentsOfPost}>Comments of post</button></center>
                            </div>
                        </div>
                        <div>
                            <Comments comments={comments}/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export {PostDetailsPage}