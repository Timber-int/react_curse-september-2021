import React from 'react';

import css from './Pagination.module.css';

const Pagination = ({setPage, page}) => {

    let next = () => {
        if (page >= 3) return;
        setPage(x => x + 1);
    };

    let prev = () => {
        if (page === 1) return;
        setPage(x => x - 1);
    };

    return (
        <div className={css.wrapper}>
            <button className={page <= 1 ? css.notClickable : css.clickable} onClick={prev}>Prev</button>
            <button className={page >= 3 ? css.notClickable : css.clickable} onClick={next}>Next</button>
        </div>
    );
};

export {Pagination};