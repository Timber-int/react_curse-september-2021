import axios from 'axios';

import {AUTHORIZATION, baseURL} from '../constants';

export const axiosService = axios.create({
    baseURL,
    headers:{
        Authorization:AUTHORIZATION,
    }
});