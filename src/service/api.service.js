import axios from "axios";
import {baseUrl} from "../config/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

const getUsers = () => {
    return axiosInstance.get('/users');
}

const getUser = (id) => {
    return axiosInstance.get(`/users/${id}`);
}

const getPostsOfUser = (id) => {
    return axiosInstance.get(`/users/${id}/posts`);
}

export {
    getUsers,
    getPostsOfUser,
    getUser,
}