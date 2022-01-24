import React from 'react';

import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';

const Episodes = ({episodes}) => {
    return (
        <div className={css.container}>
            {
                episodes.map(episodeElement=><Episode key={episodeElement.id} episodeElement={episodeElement}/>)
            }
        </div>
    );
};

export {Episodes};