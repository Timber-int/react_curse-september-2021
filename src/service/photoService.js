import {axiosService} from "./axiosService";
import {baseURL, urls} from "../config";

export const photoService = {
    getAllPhotos: (categoryId, page) => axiosService.get(baseURL + urls.collections + `?page=${page}&limit=2&${categoryId ? `category=${categoryId}` : ''}`).then(value => value.data),
}
