import {useEffect, useState} from "react";
import "../styles/Style.css";
import User from "./User";
import {getUsers} from "../../services/api.service";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, [users])

    return (
            <div className="users-container">
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
    );
}