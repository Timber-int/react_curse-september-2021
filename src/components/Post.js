const Post = ({post: {title, body, id}}) => {
    return (
        <div className="post-box">
            <div>{id}. {title}</div>
            <div>{body}</div>
        </div>
    );
}
export default Post;