// 1
// Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при
// натисканні якої виводиться біль детальна інформація про пост в середині Posts компоненти
// 2
// Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при
// натисканні якої виводиться біль детальна інформація про коментар в середині Comments компоненти
import {useEffect, useState} from "react";
import {getCommentsOfPost, getPost, getPosts} from "../../service/api.service";
import Post from "./Post";
import ChosenPost from "./ChosenPost";
import Comments from "../commentsList/Comments";
import "../style/Style.css";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [chosenPost, setChosenPost] = useState(null);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, [posts]);

    const getMoreInfoPost = (id) => {
        getPost(id).then(value => setChosenPost({...value.data}));
    }

    const getAllCommentsOfPost = (id) => {
        getCommentsOfPost(id).then(value => setComments([...value.data]));
    }
    return (
        <div>
            <div className="items-wrapper">
                <div className="post-info">
                    <center><h3>Post info</h3></center>
                    <ChosenPost chosenPost={chosenPost}/>
                </div>

                <div className="posts-container">
                    <center style={{width:"100%"}}><h3 >Post</h3></center>
                    {
                        posts.map(post =>
                            <Post
                                key={post.id}
                                post={post}
                                getMoreInfoPost={getMoreInfoPost}
                                getAllCommentsOfPost={getAllCommentsOfPost}
                            />
                        )
                    }
                </div>

                <div className="comments-container">
                    <Comments comments={comments}/>
                </div>
            </div>
        </div>
    );
}

export default Posts;