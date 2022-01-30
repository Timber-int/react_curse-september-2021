import axiosService from "./axios.service";
import {urls} from "../configs";

export const carService = {
    getAll: () => axiosService.get(`${urls.cars}`).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`).then(value => value.data),
    create: (car) => axiosService.post(`${urls.cars}`, car).then(value => value.data),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car).then(value => value.data),
}
