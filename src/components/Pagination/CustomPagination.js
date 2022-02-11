import React from 'react';

import {Pagination} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {setPageNumber} from '../../store';
import './CustomPagination.css';

const CustomPagination = ({countOfPages}) => {

    const dispatch = useDispatch();

    const {page} = useSelector(state => state['pageReducer']);

    const {theme} = useSelector(state => state['themeReducer']);

    const handlePageChange = (page) => {
        dispatch(setPageNumber({page}));
        window.scroll(0, 0);
    }

    return (
        <div className={theme === true ? 'pagination-container' : 'pagination-container_dark-mode'}>
            <Pagination
                count={countOfPages}
                onChange={(e) => handlePageChange(e.target.textContent)}
                hideNextButton
                hidePrevButton
                page={JSON.parse(page)}
                className={theme === true ? 'pagination-button' : 'pagination-button_dark-mode'}
            />
        </div>
    );
};

export {CustomPagination};