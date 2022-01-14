import {useEffect, useState} from "react";
import {getUsers} from "./service/api.service";
import Users from "./copmonents/usersList/Users";
import Form from "./copmonents/form/Form";

function App() {

    const [users, setUsers] = useState([]);

    const [form, setForm] = useState({name: '', userName: '', email: ''});

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newUsers = [];
        users.filter(user => {
            if (user.name.includes(form.name) && user.username.includes(form.userName) && user.email.includes(form.email)) {
                newUsers.push(user);
            }
        });
        setUsers(newUsers);
    }

    const formHandler = (e) => {
        console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div className="App">
            <Form form={form} onFormSubmit={onFormSubmit} formHandler={formHandler}/>

            <Users users={users}/>
        </div>
    );
}

export default App;
