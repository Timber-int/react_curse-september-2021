import {useEffect, useState} from "react";
import Comment from "./Comment";
import '../styles/Style.css';
import {getComments} from "../../services/api.service";

export default function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value.data]));
    }, []);

    return (
            <div className="comments-container">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
    );
}