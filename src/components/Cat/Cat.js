import React from 'react';

import css from './Cat.module.css';

const Cat = ({cat, removeCat}) => {
    return (
        <center>
            <div className={css.cat_box}>
                Name: {cat.cat}
                <button onClick={() => removeCat(cat.id)}>delete</button>
            </div>
        </center>
    );
};

export {Cat};