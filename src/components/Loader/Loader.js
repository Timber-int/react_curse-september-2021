import React from 'react';

import {useSelector} from 'react-redux';
import './Loader.css';

const Loader = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    return (
        <div className={theme===true?'loading-content':'loading-content_dark-mode'}>

        </div>
    );
};

export {Loader};