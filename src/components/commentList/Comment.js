import '../styles/Style.css';


export default function Comment({comment: {postId, id, name, email, body}}) {

    return (
        <div>
            <div className="comment-box">
                <div>Post id: {postId}</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
        </div>
    );
}