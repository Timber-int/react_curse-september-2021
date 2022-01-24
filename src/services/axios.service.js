import axios from "axios";
import {baseURL} from "../config/urls";

const axiosService = axios.create({
    baseURL: baseURL,
});

export {
    axiosService
}