import "../style/Style.css";


const Post = ({post: {id, body, title}}) => {

    return (
        <div>
            <div className="post-box">
                <div>Id: {id}</div>
                <div>Body: {body}</div>
                <div>Title: {title}</div>
            </div>
        </div>
    );
}

export default Post;