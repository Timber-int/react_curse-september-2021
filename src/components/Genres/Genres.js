import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {SelectedGenre} from '../SelectedGenre/SelectedGenre';
import {Genre} from '../Genre/Genre';
import {Loader} from '../Loader/Loader';
import {LOADING} from '../../constants';
import {addGenreMovie, getAllGenres, removeGenreMovie} from '../../store';
import './Genres.css';

const Genres = () => {

    const {genres, status, errors, selectedGenres} = useSelector(state => state['genresReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    const handleAdd = (genre) => {
        dispatch(addGenreMovie({genre}));
    }

    const handleRemove = (genre) => {
        dispatch(removeGenreMovie({genre}));
    }

    return (
        <>
            {status === LOADING && <div className='genres-loading'><Loader/></div>}
            {errors && <center><h1>{errors}</h1></center>}

            <div className='genres-container'>
                {
                    selectedGenres && selectedGenres.map(genre =>
                        <SelectedGenre key={genre.id} genre={genre} handleRemove={handleRemove}/>)
                }
                {
                    genres && genres.map(genre => <Genre key={genre.id} genre={genre} handleAdd={handleAdd}/>)
                }
            </div>
        </>
    );
};

export {Genres};