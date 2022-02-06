import React from 'react';

import {NavLink} from 'react-router-dom';
import {img_300, unavailable} from '../../constants';
import {Rating} from '../Rating/Rating';
import './Movie.css';

const Movie = ({movie}) => {
    const {
        id,
        poster_path,
        title,
        release_date,
        vote_average,
    } = movie;

    return (
        <div className='movie-card'>
            <NavLink to={`/${id.toString()}`} state={movie}>
                <img className='poster'
                     src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                     alt={title}
                />
               <div className='title'>{title}</div>
               <span className='release-date'>Release date: {release_date}</span>
            </NavLink>
            <Rating vote_average={vote_average}/>
        </div>
    );
};

export {Movie};