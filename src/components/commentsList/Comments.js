import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service/api.service";
import Comment from "./Comment";
import '../style/Style.css';

export default function Comments({id}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost(id).then(value => setComments([...value.data]));
    }, [id]);

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