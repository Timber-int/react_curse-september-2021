import React from 'react';

import {useSelector} from 'react-redux';
import './Header.css';

const Header = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    return (
        <div>
            <span onClick={() => window.scroll(0, 0)} className={theme === true ? 'header' : 'header_dark-mode'}>
                🎬 Movie App 🎥
            </span>
        </div>
    );
};

export {Header};