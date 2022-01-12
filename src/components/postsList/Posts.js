import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.service";
import Post from "./Post";
import '../styles/Style.css';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

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