import {axiosService} from "./axios.service";
import {baseURL, urls} from "../configs/urls";

const characterService = {
    getById: (arrayId) => axiosService.get(`${baseURL}${urls.character}/${arrayId}`).then(value => value.data),
}

export {
    characterService,
}