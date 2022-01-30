import axios from "axios";
import {baseJsonPlaceholderURL, baseURL} from "../configs";

const axiosService = axios.create({
    baseURL,
});


const axiosServiceJsonPlaceHolder = axios.create({
    baseURL: baseJsonPlaceholderURL
});

export {axiosService, axiosServiceJsonPlaceHolder};