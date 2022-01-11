import "../style/Style.css";

const Post = ({post: {id, title}, getMoreInfoPost, getAllCommentsOfPost}) => {

    return (
        <div className="post-box">
            <div style={{height: "50px"}}>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </div>

            <div>
                <button onClick={() => getMoreInfoPost(id)}>Post information</button>
                <button onClick={() => getAllCommentsOfPost(id)}>Comments of post</button>
            </div>
        </div>
    );
}

export default Post;