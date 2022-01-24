import React from 'react';

import css from './Characters.module.css';
import {Character} from "../Character/Character";

const Characters = ({charactersValue}) => {
    return (
        <div className={css.container}>
            {
                charactersValue.map(character => <Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export {Characters}