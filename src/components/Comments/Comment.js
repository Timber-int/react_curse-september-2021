const Comment = ({comment: {postId, id, name, email, body}}) => {

    return (
        <div>
            <div className="comment-box">
                <div>{postId}</div>
                <div>{id}</div>
                <div>{name}</div>
                <div >{email}</div>
                <div>{body}</div>
            </div>
        </div>
    );
};
export default Comment;