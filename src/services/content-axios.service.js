import {axiosService} from "./axios.service";
import {baseURL, urls} from "../configs/urls";

const contentService = {
    getAll: () => axiosService.get(`${baseURL}${urls.episode}`).then(value => value.data),
}

export {contentService};