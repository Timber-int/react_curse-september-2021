import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {MovieDetailPage, MoviesPage, NotFoundPage} from './pages';
import {Layout} from './components';

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={':id'} element={<MovieDetailPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};