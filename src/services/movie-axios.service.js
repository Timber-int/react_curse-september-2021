import {axiosService} from './axios.service';

import {API_KEY} from '../constants';

export const movieService = {
    getAllDiscoverMovie: (page, genreForURL) => axiosService.get(`/discover/movie/?api_key=${API_KEY}&\nlanguage=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`).then(value => value.data),
    getAllDiscoverGenre: () => axiosService.get('/genre/movie/list').then(value => value.data),
    getById: (id) => axiosService.get(`/movie/${id}`).then(value => value.data),
}