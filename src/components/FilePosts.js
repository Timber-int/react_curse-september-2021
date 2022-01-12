import {useEffect, useState} from "react";
import {getPosts} from "../service/api.service";
import Posts from "./Posts";
import Pagination from "./Pagination";

const FilePosts = () => {

    const [posts, setPosts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = () => {
            setTimeout(() => {
                getPosts().then(value => setPosts([...value.data]));
                setIsLoading(false);
            }, 2000);
        }
        fetchPosts();
    }, );

    const indexLastPost = currentPage * postsPerPage;
    const indexFirstPost = indexLastPost - postsPerPage;
    const currentPost = posts.slice(indexFirstPost, indexLastPost);

    const startPagination = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {
                isLoading === true
                    ? <center><h3>Loading...</h3></center>
                    : <div>
                        <center><h3>Posts information</h3></center>
                        <Posts
                            posts={currentPost}
                        />
                        <Pagination
                            totalPage={posts.length}
                            postsPerPage={postsPerPage}
                            startPagination={startPagination}
                        />
                    </div>
            }
        </div>
    );
}
export default FilePosts;