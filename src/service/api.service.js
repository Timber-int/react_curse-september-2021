import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: "",
    params: "",
});

const getPosts = () => {
    return axiosInstance(`/posts`);
}

const getCommentsOfPost = (id) => {
    return axiosInstance(`/posts/${id}/comments`);
}

export {
    getPosts,
    getCommentsOfPost,
}
