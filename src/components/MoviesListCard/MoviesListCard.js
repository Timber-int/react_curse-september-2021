import React from 'react';

import {Link, useLocation} from 'react-router-dom';
import {img_500, unavailable} from '../../constants';
import './MoviesListCard.css';
import {useSelector} from "react-redux";

const MoviesListCard = () => {

    const {state: movie} = useLocation();

    const {
        poster_path,
        title,
        overview,
        original_language,
        release_date,
        vote_count,
        original_title
    } = movie;

    const {genres, status, errors, selectedGenres} = useSelector(state => state['genresReducer']);

    return (
        <div className='movie_card-container'>
            <Link className='movie_card-exit' to={'/'}>❌</Link>
            <div className='movie-card_poster'>
                <img className='movie-poster_img'
                     src={
                         poster_path
                             ? `${img_500}/${poster_path}`
                             : unavailable
                     }
                     alt={title}
                />
            </div>
            <div className='movie-card_content'>
                <div className='movie-card_original-title'>{original_title}</div>
                <div className='movie-card_overview'>
                    {overview}
                </div>
                <div className='movie-card_information-content'>
                    <div>Language: {original_language}</div>
                    <div>Release date: {release_date}</div>
                    <div>Vote count: {vote_count}</div>
                    <div>Genre:</div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};