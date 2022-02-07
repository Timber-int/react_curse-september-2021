import React from 'react';

import {Pagination, ThemeProvider} from '@mui/material';
import {createTheme} from '@material-ui/core';
import './CustomPagination.css';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
    }
});

const CustomPagination = ({setPage, numberOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='pagination-container'>
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numberOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    color='primary'
                />
            </ThemeProvider>
        </div>
    );
};

export {CustomPagination};