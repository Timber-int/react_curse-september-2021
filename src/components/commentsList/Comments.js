import Comment from "./Comment";
import "../style/Style.css";

const Comments =({comments})=>{
    return(
        <div>
            <center><h3>Comments</h3></center>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}

export default Comments;