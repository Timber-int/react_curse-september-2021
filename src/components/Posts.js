import Post from "./Post";
import '../styles/styles.css';
import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../service/api.service";
import Comments from "./Comments/Comments";

const Posts = ({posts}) => {

    const [comments, setComments] = useState([]);

    const getAllCommentsOfPost = (id) => {
        getCommentsOfPost(id).then(value => setComments([...value.data]));
    }


    return (<div>
            <Comments comments={comments}/>
            <div className="posts-container">
                {
                    posts.map(post =>
                        <Post key={post.id} post={post} getAllCommentsOfPost={getAllCommentsOfPost}/>
                    )
                }
            </div>
        </div>
    );
}
export default Posts;