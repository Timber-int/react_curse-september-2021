import {axiosServiceJsonPlaceHolder} from "./axios.service";
import {urls} from "../configs";

export const usersService = {
    getAll: () => axiosServiceJsonPlaceHolder.get(`${urls.users}`).then(value => value.data),
}