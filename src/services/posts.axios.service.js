import {axiosServiceJsonPlaceHolder} from "./axios.service";
import {urls} from "../configs";

export const postsService = {
    getAll: () => axiosServiceJsonPlaceHolder.get(`${urls.posts}`).then(value => value.data),
}