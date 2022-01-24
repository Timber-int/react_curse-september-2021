import {axiosService} from "./axios.service";
import {baseURL, urls} from "../configs/urls";

const contentService = {
    getAll: (page) => axiosService.get(`${baseURL}${urls.episode}?page=${page}`).then(value => value.data),
}

export {contentService};