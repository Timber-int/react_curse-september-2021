import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: '',
});

const getPosts = () => {
    return axiosInstance.get('/posts');
};

const getPost = (id) => {
    return axiosInstance.get(`/posts/${id}`);
};

const getCommentsOfPost = (id) => {
    return axiosInstance.get(`/posts/${id}/comments`);
}

export {
    getPosts,
    getPost,
    getCommentsOfPost,
}