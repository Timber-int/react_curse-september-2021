import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Comment} from "../Comment/Comment";
import {LOADING} from "../../constants";
import {getAllComments} from "../../store";

const Comments = () => {

    const {comments, status, errors} = useSelector(state => state["commentsReducer"]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments());
    }, []);

    return (

        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};