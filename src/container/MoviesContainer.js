import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {Footer, Layout} from '../components';
import {MovieDetailPage, MoviesPage, NotFoundPage} from '../pages';
import './MovieContainer.css';

const MoviesContainer = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={':id'} element={<MovieDetailPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

            <div className='footer-container'>
                <Footer/>
            </div>
        </>

    );
};

export {MoviesContainer};