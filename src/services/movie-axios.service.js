import {axiosService} from './axios.service';

export const movieService = {
    getAllDiscoverMovie: (page) => axiosService.get(`/discover/movie/?api_key=7146badc97642e6a0f196651f42a94e7&\nlanguage=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`).then(value => value.data),
    getAllDiscoverGenre: () => axiosService.get('/genre/movie/list').then(value => value.data),
    getById: (id) => axiosService.get('/movie/${id}').then(value => value.data),
}