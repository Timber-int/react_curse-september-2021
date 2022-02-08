import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {Genre} from '../Genre/Genre';
import {LOADING} from '../../constants';
import {getAllGenres} from '../../store';

const Genres = () => {

    const {genres, status, errors} = useSelector(state => state['genresReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    return (
        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            {
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
}

export {Genres};