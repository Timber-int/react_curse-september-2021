import {useEffect, useState} from "react";
import {getPosts} from "../service/api.service";
import Posts from "./Posts";
import Pagination from "./Pagination";

const FilePosts = () => {

    const [posts, setPosts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        setIsLoading(true);
        const fetchPosts = () => {
            setTimeout(() => {
                getPosts().then(value => setPosts([...value.data]));
            }, 4000);
            setIsLoading(false);
        }

        fetchPosts();
    }, [posts]);

    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    const currentPost = posts.slice(indexFirstPost, indexLastPost);

    const startPagination = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {
                isLoading === true
                    ? <center><h3>Loading...</h3></center>
                    : <Posts posts={currentPost}/>
            }
            <Pagination totalPage={posts.length} postsPerPage={postsPerPage} startPagination={startPagination}/>
        </div>
    );
}
export default FilePosts;