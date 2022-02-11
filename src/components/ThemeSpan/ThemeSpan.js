import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../../store';
import './ThemeSpan.css';

const ThemeSpan = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    const dispatch = useDispatch();

    return (
        <span className={theme === true ? 'theme-button' : 'theme-button_dark-mode'}
              onClick={() => dispatch(changeTheme())}>{theme === true ? '☀️' : '🌙'}
            </span>
    );
};

export {ThemeSpan};