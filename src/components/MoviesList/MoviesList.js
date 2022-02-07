import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getAllMovies} from '../../store';
import {LOADING} from '../../constants';
import {Movie} from '../Movie/Movie';
import {CustomPagination} from '../Pagination/CustomPagination';
import './MoviesList.css';

const MoviesList = () => {
    const {movies, status, errors} = useSelector(state => state['moviesReducer']);

    const {page, countOfPages} = useSelector(state => state['pageReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies({page}));
    }, [page]);

    return (
        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            <div className='movies-container'>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            {
                countOfPages > 1 && <CustomPagination  countOfPages={countOfPages}/>
            }
        </div>
    );
}

export {MoviesList};