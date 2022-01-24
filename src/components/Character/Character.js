import React from 'react';

import css from './Character.module.css';

const Character = ({character}) => {

    const {image, gender, name, species, status, location, origin} = character;

    return (
        <div className={css.box}>
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>Name: {name}</div>
            <div>Gender: {gender}</div>
            <div>Species: {species}</div>
            <div>Status: {status}</div>
            <div>Location: {location.name}</div>
            <div>Origin: {origin.name}</div>
        </div>
    );
};

export {Character};