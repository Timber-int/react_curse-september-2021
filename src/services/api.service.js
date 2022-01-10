import axios from 'axios';

const axiosInitial = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
});

const getUsers = () => {
    return axiosInitial.get('/users');
};

const getPosts = () => {
    return axiosInitial.get('/posts');
};

const getComments = () => {
    return axiosInitial.get('/comments');
};

export {
    getUsers,
    getComments,
    getPosts,
}