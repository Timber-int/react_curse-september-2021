import React from 'react';

import css from './DogsList.module.css';
import {Dog} from '../Dog/Dog';

const DogsList = ({dogs ,removeDog}) => {
    return (
            <div className={css.dogs_container}>
                {
                    dogs.map(dog => <Dog key={dog.id} dog={dog} removeDog={removeDog}/>)
                }
            </div>
    );
};

export {DogsList}