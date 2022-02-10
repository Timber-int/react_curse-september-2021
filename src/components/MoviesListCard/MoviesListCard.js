import React, {useEffect, useState} from 'react';

import {Link, useLocation} from 'react-router-dom';
import {img_500, unavailable} from '../../constants';
import {movieService} from '../../services';
import './MoviesListCard.css';

const MoviesListCard = () => {

    const [movieDetails, setMovieDetails] = useState({});

    const [video, setVideo] = useState();

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

    const {budget, runtime, production_countries, genres, imdb_id} = movieDetails;

    useEffect(() => {
        movieService.getById(id).then(value => setMovieDetails({...value}));
        movieService.getVideo(id).then(value => setVideo(value.results[0]?.key));
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
                    <div>Budget: {budget} $</div>
                    <div>Runtime: {runtime} min</div>
                    <div>Country: {
                        production_countries
                            ?
                            production_countries.map(country => country.name)
                            :
                            ''
                    }
                    </div>
                    <div>
                        Genres: {
                        genres
                            ?
                            genres.map(genre => `${genre.name}; `)
                            :
                            ''
                    }
                    </div>
                    <div>IMDB: {
                        imdb_id
                            ?
                            imdb_id
                            :
                            ''
                    }
                    </div>
                </div>
            </div>
            <div className='movie-video-container'>
                <iframe title={'video'}
                        className='movie-video'
                        src={'https://www.youtube.com/embed/' + video}
                />
            </div>
        </div>
    );
};

export {MoviesListCard};