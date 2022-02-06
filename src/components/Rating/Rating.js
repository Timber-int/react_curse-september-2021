import React from 'react';

import ReactStars from 'react-rating-stars-component/dist/react-stars';
import './Rating.css';

const Rating = ({vote_average}) => {

    const rating = vote_average / 2;

    return (
        <div className='star-rating'>
            <ReactStars size={25} isHalf={true} count={5} value={rating}/>
        </div>
    );
};

export {Rating};