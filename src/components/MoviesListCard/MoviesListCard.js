import React from 'react';

import {useLocation} from 'react-router-dom';
import {img_500, unavailable} from '../../constants';
import './MoviesListCard.css';

const MoviesListCard = () => {

    const {state} = useLocation();

    const movie = state[0];
    const page = state[1];

    const {
        poster_path,
        title,
        overview,
        original_language,
        release_date,
        vote_count,
        original_title
    } = movie;

    return (
        <div className='movie_card-container'>
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