import React from 'react';

import {Link} from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div>
            <center><div className='not-content'>😱 Sorry but not content at this page 😰</div></center>
            <Link to={'/'} className='return-home'>Return Home</Link>
        </div>
    );
};

export {NotFoundPage};