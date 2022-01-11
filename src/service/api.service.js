import axios from "axios";

const axiosInitial = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches',
    headers: '',
});

const getMissionInfo = () => {
    return axiosInitial.get('/');
}

export {
    getMissionInfo,
}