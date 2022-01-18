import React from 'react';
import {Comment} from "../Comment/Comment";

import "./Comments.css";

const Comments = ({comments}) => {
    return (
        <div className="comments-container">
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export {Comments};