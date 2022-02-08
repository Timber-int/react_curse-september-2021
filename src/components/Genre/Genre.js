import React from 'react';

import {useDispatch} from 'react-redux';
import {getChosenGenreId, } from '../../store';


const Genre = ({genre}) => {

    const {id, name} = genre;

    const dispatch = useDispatch();

    return (
        <div className='genres-box' onClick={()=>dispatch(getChosenGenreId({id}))}>
            <div>{name}</div>
        </div>
    );
};

export {Genre};