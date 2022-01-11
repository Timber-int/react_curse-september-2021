import "../style/Style.css";


const User = ({user: {id, name, email}, getAllPostsOfUser}) => {

    return (
        <div>
            <div className="user-box">
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <button onClick={() => getAllPostsOfUser(id)}>User information</button>
            </div>
        </div>
    );
}

export default User;