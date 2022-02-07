import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getAllMovies} from '../../store';
import {LOADING} from '../../constants';
import {Movie} from '../Movie/Movie';
import './MoviesList.css';
import {CustomPagination} from '../Pagination/CustomPagination';

const MoviesList = () => {

    const [page, setPage] = useState(1);

    const [numOfPages, setNumOfPages] = useState(500);

    const {movies, status, errors} = useSelector(state => state['moviesReducer']);

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
                numOfPages > 1 && <CustomPagination setPage={setPage} numberOfPages={500}/>
            }
        </div>
    );
}

export {MoviesList};