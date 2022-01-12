import {useEffect, useState} from "react";
import {getUsers} from "../../service/api.service";
import User from "./User";
import '../style/Style.css';

// отримати всіх юзерів з https://jsonplaceholder.typicode.com/ вивести на сторінку
//     До кожного юзера отримати пости та вивести в межах User компоненти
// До кожного поста отримати комментарі, та вивести в межах Post компоненти

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    return (
        <div>
            <div className="user-container">
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
}