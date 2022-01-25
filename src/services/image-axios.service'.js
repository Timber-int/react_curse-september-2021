import {axiosService} from "./axios.service";
import {baseURL} from "../config/urls";

const imageService = {
    getImageValue: (image) => axiosService.get(`${baseURL}/${image}`).then(value => value.config.url),
}

export {
    imageService,
}