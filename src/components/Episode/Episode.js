import React from 'react';

import css from "./Episode.module.css";
import {Link} from "react-router-dom";

const Episode = ({episodeElement}) => {
    const {id, name, episode, air_date} = episodeElement;
    return (
        <div className={css.box}>
            <h2>{name}</h2>
            <h4>Episode: {episode}</h4>
            <h5>Air date: {air_date}</h5>
            <Link to={`episode/${id}`} state={episodeElement}>Episode details</Link>
        </div>
    );
};

export {Episode};