import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {Layout} from '../components';
import {MovieDetailPage, MoviesPage, NotFoundPage} from '../pages';

const MoviesContainer = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<MoviesPage/>}/>
                <Route path={':id'} element={<MovieDetailPage/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {MoviesContainer};