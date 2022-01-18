import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {Post} from "../../components/Post/Post";
import {Outlet, useSearchParams} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    // Хук useSearchParams використовується для пошуку по url
    // В query є параметр get для того щоб дістати ті дані яки записані в query
    const [query, setQuery] = useSearchParams();
    // Дістаємо обєкт по ключу title;
    console.log(query.get('title'));

    useEffect(() => {
        postService.getAll().then(value => {

            const title = query.get(`title`);
            let filterValue = [...value];

            if (title) {
                filterValue = value.filter(post => post.title.includes(title));
            }

            setPosts(filterValue);
        });
    }, [query]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
        // В query записуємо об'єкт з ключем title;
        setQuery({title: e.target.search.value});
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="search" name={"search"} placeholder={"Поиск..."}/>
                <input type="submit" value={'Search'}/>
            </form>

            <h1>Posts List</h1>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage}