import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: "",
    params: "",
});

const getPosts = () => {
    return axiosInstance(`/posts`);
}

export {
    getPosts,
}
