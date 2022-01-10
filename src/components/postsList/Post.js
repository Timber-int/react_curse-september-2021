import Comments from "../commentsList/Comments";
import '../style/Style.css';

export default function Post({post: {id, body, title, userId}}) {

    return (
        <div>
            <div className="block">
                <div>
                    <center>
                        <h4>
                            Post {id}
                        </h4>
                    </center>

                    <div className='post-box'>
                        <div>Body: {body}</div>
                        <div>Id: {id}</div>
                        <div>Title: {title}</div>
                        <div>User id: {userId}</div>
                    </div>
                </div>

                <Comments id={id}/>
            </div>


        </div>
    );
}