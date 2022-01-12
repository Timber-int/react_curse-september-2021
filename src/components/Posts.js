import Post from "./Post";
import '../styles/styles.css';

const Posts = ({posts}) => {
    return (
        <div className="posts-container">
            {
                posts.map(post =>
                    <Post key={post.id} post={post}/>
                )
            }
        </div>
    );
}
export default Posts;