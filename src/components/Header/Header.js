import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../store';
import './Header.css';

const Header = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    const dispatch = useDispatch();

    return (
        <div>
            <span onClick={() => window.scroll(0, 0)} className={theme === true ? 'header' : 'header_dark-mode'}>
                🎬 Movie App 🎥
            </span>
            <span className={theme === true ? 'theme-button' : 'theme-button_dark-mode'}
                  onClick={() => dispatch(changeTheme())}>{theme === true ? '☀️' : '🌙'}
            </span>
        </div>
    );
};

export {Header};