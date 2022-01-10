import axios from "axios";

const axiosInitial = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {},
});

const getComments = () => {
    return axiosInitial.get('/comments');
};

const getComment = (id) => {
    return axiosInitial.get(`/comments/${id}`);
};

export {
    getComments
};