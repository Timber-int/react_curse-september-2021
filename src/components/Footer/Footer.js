import React from 'react';

import {UserInfo} from '../UserInfo/UserInfo';
import './Footer.css';

const Footer = () => {
    return (
        <div onClick={() => window.scroll(0, 0)} className='footer'><UserInfo/></div>
    );
};

export {Footer};