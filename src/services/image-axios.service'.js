import {axiosService} from "./axios.service";
import {baseURL} from "../config/urls";

const imageService = {
    getImage: (image) => axiosService.get(`${baseURL}/${image}`).then(value => value.data),
}

export {
    imageService,
}