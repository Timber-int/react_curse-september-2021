// 1
// Отримати всі user з jsonplaceholder та вивести їх. до кожного user зробити кнопку при
// натисканні якої виводиться всі пости поточного юзера в межах Users компоненти
// State lifting + events task

import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../service/api.service";
import User from "./User";
import Post from "../postsList/Post";
import "../style/Style.css";

const Users = () => {

    const [users, setUsers] = useState([]);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const getAllPostsOfUser = (id) => {
        getPostsOfUser(id).then(value => setPosts([...value.data]));
    };

    return (
        <div>
            <div className="users-wrapper">
                <div className="users-container">
                    <center><h3>Users</h3></center>
                    {
                        users.map(user => <User key={user.id} user={user} getAllPostsOfUser={getAllPostsOfUser}/>)
                    }
                </div>

                <div className="posts-container">
                    <center><h3>Posts</h3></center>
                    {
                        posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Users;