import React from 'react';

import {useSelector} from 'react-redux';
import {MoviesContainer} from './container';
import './App.css';

const App = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    return (
        <div className={theme === true ? 'App' : 'App_dark-mode'}>
            <MoviesContainer/>
        </div>
    );
};

export {App};