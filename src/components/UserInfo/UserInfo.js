import React from 'react';

import {useSelector} from 'react-redux';
import './UserInfo.css';

const UserInfo = () => {

    const {theme} = useSelector(state => state['themeReducer']);

    return (
        <div className={theme === true ? 'user-container' : 'user-container_dark-mode'}>
            <div>👽Telegram: Artem_SlobodianykGOO</div>
            <div>Email: timoty01@ukr.net</div>
        </div>
    );
};

export {UserInfo};