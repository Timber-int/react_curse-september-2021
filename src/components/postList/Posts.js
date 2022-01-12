import {useEffect, useState} from "react";
import Post from "./Post";
import '../styles/Style.css';
import {getPosts} from "../../services/api.service";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    return (
            <div className="posts-container">
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
    );
}