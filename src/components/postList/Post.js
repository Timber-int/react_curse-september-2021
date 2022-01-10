import '../styles/Style.css';

export default function Post({post: {id, body, title, userId}}) {
    return (
        <div>
            <center><h3>Post: {id}</h3></center>
            <div className='post-box'>
                <div>Body: {body}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <div>User id: {userId}</div>
            </div>
        </div>
    );
}