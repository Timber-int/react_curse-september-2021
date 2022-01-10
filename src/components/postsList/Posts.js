import Post from "./Post";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../service/api.service";
import '../style/Style.css';

export default function Posts({id}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsOfUser(id).then(value => setPosts([...value.data]));
    }, [id]);

    return (
        <div>
            <div className="posts-container">
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
}