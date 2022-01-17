import axiosService from "./axios.service";
import {urls} from "../configs/urls";
import {logDOM} from "@testing-library/react";

export const carService = {
    create: (car) => axiosService.post(`${urls.cars}`, car).then(value => value.data),

    getAll: () => axiosService.get(urls.cars).then(value => value.data),

    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),

    updateById: (id, {model, price, year}) => axiosService.put(`${urls.cars}/${id}`, {
        body: JSON.stringify({
            model: `${model}`,
            price: `${price}`,
            year: `${year}`,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(value => value.data),

    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
}

export default carService;