import {baseURL} from "../configs/urls";

const axios = require("axios");

const axiosService = axios.create({
    baseURL: baseURL,
});

export {
    axiosService,
}
