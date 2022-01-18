import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users-axios.service";
import {PostsOfCurrentUser} from "../../components/PostsOfCurrentUser/PostsOfCurrentUser";
import "./UserDetailsPage.css";

const UserDetailsPage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const params = useParams();

    const {id} = params;

    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        usersService.getById(id).then(value => setUser({...value}));
    }, []);

    const getAllPostsOfUser = () => {
        usersService.getPostsById(id).then(value => setPosts([...value]));
    }

    return (
        <div className="user_details-box">
            {
                user && (
                    <div>
                        <div className="wrapper">
                            <div className="full-user">
                                <div>Id: {id}</div>
                                <div>Name: {user.name} </div>
                                <div>UserName: {user.username}</div>
                                <div>Email: {user.email}</div>
                                <div>Phone: {user.email}</div>
                                <div>Website: {user.email}</div>
                            </div>

                            <div>
                                <button onClick={getAllPostsOfUser}>Get Posts Of User</button>
                            </div>
                        </div>
                        <hr/>

                        <div className="posts-ofCurrentUser">
                            <PostsOfCurrentUser posts={posts}/>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export {UserDetailsPage};