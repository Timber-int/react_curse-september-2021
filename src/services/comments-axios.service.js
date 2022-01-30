import {axiosServiceJsonPlaceHolder} from "./axios.service";
import {urls} from "../configs";

export const commentsService = {
    getAll: () => axiosServiceJsonPlaceHolder.get(`${urls.comments}`).then(value => value.data),
}
