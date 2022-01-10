import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comment from "./Comment";
import '../styles/Style.css';

export default function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value.data]));
    }, [comments]);

    return (
        <div>
            <div className="comments-container">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </div>
    );
}