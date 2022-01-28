import React from 'react';

import {Cat} from '../Cat/Cat';
import css from './CatsList.module.css';

const CatsList = ({cats, removeCat}) => {
    return (
            <div className={css.cats_container}>
                {
                    cats.map(cat => <Cat key={cat.id} cat={cat} removeCat={removeCat}/>)
                }
            </div>
    );
};

export {CatsList};