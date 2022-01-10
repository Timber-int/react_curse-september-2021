import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
});

const getUsers = () => {
    return axiosInstance(`/users`);
};

const getPostsOfUser = (id) => {
    return axiosInstance(`/users/${id}/posts`);
};

const getCommentsOfPost = (id) => {
    return axiosInstance(`/posts/${id}/comments`);
}

export {
    getUsers,
    getPostsOfUser,
    getCommentsOfPost,
}