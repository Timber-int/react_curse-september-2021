import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    // Для витягування динамічних даних по url
    const params = useParams();
    // console.log(params);
    const {id} = params;

    // Для отримання інформації яку ми передали в state нa іншому компоненті
    // state витягуємо як об'єкт {}
    const {state} = useLocation();
    // console.log(state);

    // За допомогою даного хука можна рухатися по історії (він приймає url куди перейти або число() + або - дія вперед або назад)
    // другим пареметром приймає об'єкт replace якщо {replace:true} попередня історія відвідин на сайті затреться.
    const navigate = useNavigate();
    // console.log(navigate);

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }

        postService.getById(id).then(value => setPost({...value}));
    }, []);

    const toHome = () => {
        navigate('/',{replace:true});
    }

    const toBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={toBack}>Back</button>

            {post &&
            (<div>
                    <div>Id: {post.id} </div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <div>User Id: {post.userId}</div>
                </div>
            )}
        </div>
    );
};

export {SinglePostPage};