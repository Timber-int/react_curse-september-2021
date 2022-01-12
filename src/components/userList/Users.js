import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import "../styles/Style.css";
import User from "./User";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    return (
        <div>
            <div className="users-container">
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
}