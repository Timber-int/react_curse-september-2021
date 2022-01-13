import {useEffect, useState} from "react";


import User from "../user/User";
import {getPostsOfUser, getUser, getUsers} from "../../../service/api.service";
import UserDetails from "../userDetails/UserDetails";
import Posts from "../../postsList/posts/Posts";
import "./Users.css";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const getUserDetails = (id) => {
        getUser(id).then(value => setUserDetails({...value.data}));
    }

    const getUserPostsDetails = (id) => {
        getPostsOfUser(id).then(value => setPosts([...value.data]));
    }
    return (<div>
            <div className="wrapper">
                <div className="users-container">
                    {
                        users.map(user => <User key={user.id} user={user} getUserDetails={getUserDetails}/>)
                    }
                </div>

                {
                    userDetails && (
                        <div className="user_details-container">
                            <UserDetails userDetails={userDetails} getUserPostsDetails={getUserPostsDetails}/>
                        </div>
                    )
                }
            </div>

            <div>
                <Posts posts={posts}/>
            </div>

        </div>

    );
}

export default Users;