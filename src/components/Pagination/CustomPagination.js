import React from 'react';

import {Pagination, ThemeProvider} from '@mui/material';
import {createTheme} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {setPageNumber} from '../../store';
import './CustomPagination.css';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
    }
});

const CustomPagination = ({countOfPages}) => {

    const dispatch = useDispatch();

    const {page} = useSelector(state => state['pageReducer']);

    const handlePageChange = (page) => {
        dispatch(setPageNumber({page}));
        window.scroll(0, 0);
    }

    return (
        <div className='pagination-container'>
                <Pagination
                    count={countOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    page={JSON.parse(page)}
                    color='primary'
                />
            
        </div>
    );
};

export {CustomPagination};