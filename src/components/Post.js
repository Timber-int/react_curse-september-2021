import '../styles/styles.css';


const Post = ({post: {title, body, id}, getAllCommentsOfPost}) => {

    return (
        <div className="post-box" onMouseEnter={() => getAllCommentsOfPost(id)}>
            <div>{id}. {title}</div>
            <div>{body}</div>
        </div>
    );
}
export default Post;