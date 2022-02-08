import React, {useEffect, useState} from 'react';

import {Link, useLocation} from 'react-router-dom';
import {img_500, unavailable} from '../../constants';
import {movieService} from '../../services';
import './MoviesListCard.css';

const MoviesListCard = () => {

    const [movieDetails, setMovieDetails] = useState({});

    const {state: movie} = useLocation();

    const {
        id,
        poster_path,
        title,
        overview,
        original_language,
        release_date,
        vote_count,
        original_title,
    } = movie;

    useEffect(() => {
        movieService.getById(id).then(value => setMovieDetails({...value}));
    }, [id]);

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
                    <div>Budget: {movieDetails.budget} $</div>
                    <div>Runtime: {movieDetails.runtime} min</div>
                    <div>Country: {
                        movieDetails.production_countries
                            ?
                            movieDetails.production_countries.map(country => country.name)
                            :
                            ''
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MoviesListCard};