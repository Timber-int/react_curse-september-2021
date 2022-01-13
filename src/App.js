import {useEffect, useState} from "react";
import {getUsers} from "./service/api.service";
import Users from "./copmonents/usersList/Users";

function App() {

    const [users, setUsers] = useState([]);

    const [form, setForm] = useState({name: '', userName: '', email: ''});

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        users.forEach(user => {
            console.log(user)
            if (user.name.includes(form.name) || user.username.includes(form.userName) || user.email.includes(form.email)) {
                setUsers([...users,{...user}])
            }
        });
    }
    console.log(users);

    const formHandler = (e) => {
        console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div className="App">
            <form onSubmit={onFormSubmit}>
                <label>Name:<input
                    type="text"
                    onChange={formHandler}
                    value={form.name}
                    name={"name"}/>
                </label>
                <label>Username:<input
                    type="text"
                    onChange={formHandler}
                    value={form.userName}
                    name={"userName"}/>
                </label>
                <label>Email:<input
                    type="text"
                    onChange={formHandler}
                    value={form.email}
                    name={"email"}/>
                </label>
                <input type="submit" value="Find"/>
            </form>

            <Users users={users}/>
        </div>
    );
}

export default App;
