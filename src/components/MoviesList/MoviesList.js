import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getAllMovies} from '../../store';
import {LOADING} from '../../constants';
import {Movie} from '../Movie/Movie';
import {CustomPagination} from '../Pagination/CustomPagination';
import {Genres} from '../Genres/Genres';
import './MoviesList.css';
import {useGenres} from '../../hooks';

const MoviesList = () => {
    const {movies, status, errors} = useSelector(state => state['moviesReducer']);

    const {page, countOfPages} = useSelector(state => state['pageReducer']);

    const {selectedGenres} = useSelector(state => state['genresReducer']);

    const genreForURL = useGenres(selectedGenres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies({page, genreForURL}));
    }, [page, selectedGenres]);

    return (
        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}

            <Genres/>

            <div className='movies-container'>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <div>
                {
                    countOfPages > 1 && <CustomPagination countOfPages={countOfPages}/>
                }
            </div>
        </div>
    );
}

export {MoviesList};