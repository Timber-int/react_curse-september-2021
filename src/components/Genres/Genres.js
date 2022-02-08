import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {Genre} from '../Genre/Genre';
import {LOADING} from '../../constants';
import {addGenreMovie, getAllGenres, removeGenreMovie} from '../../store';
import {SelectedGenre} from '../SelectedGenre/SelectedGenre';

const Genres = () => {

    const {genres, status, errors, selectedGenres} = useSelector(state => state['genresReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    const handleAdd = (genre) => {
        console.log(genre)
        dispatch(addGenreMovie({genre}));
    }

    const handleRemove = (genre) => {
        console.log(genre)
        dispatch(removeGenreMovie({genre}));
    }

    return (
        <div>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            <div style={{padding: "6px 0"}}>
                {
                    selectedGenres && selectedGenres.map(genre =>
                        <SelectedGenre key={genre.id} genre={genre} handleRemove={handleRemove}/>)
                }
                {
                    genres && genres.map(genre => <Genre key={genre.id} genre={genre} handleAdd={handleAdd}/>)
                }
            </div>
        </div>
    );
};

export {Genres};