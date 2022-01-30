import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LOADING} from "../../constants";
import {getAllUsers} from "../../store";
import {User} from "../User/User";

const Users = () => {

    const {users, errors, status} = useSelector(state => state['usersReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};