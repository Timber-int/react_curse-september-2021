import React from 'react';

import css from "./Episode.module.css";
import {Link} from "react-router-dom";

const Episode = ({episodeElement}) => {
    const {id, name, episode, air_date} = episodeElement;
    return (
        <div className={css.box}>
            <div>{name}</div>
            <div>Episode: {episode}</div>
            <div>Air date: {air_date}</div>
            <Link to={`episode/${id}`} state={episodeElement}>Episode details</Link>
        </div>
    );
};

export {Episode};