import axios from "axios";

import {baseUrl} from "../config/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

const getUsers = () => {
    return axiosInstance.get('/users');
}

export {
    getUsers,
}
