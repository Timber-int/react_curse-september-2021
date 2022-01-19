import React from 'react';

import "./Album.css";
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {title, id,} = album;
    return (
        <div className='album-box'>
            <Link to={id.toString() + '/photos'} state={id}>
                <div className="album-title">{id}) {title}</div>
                <hr/>
            </Link>
        </div>
    );
};

export {Album};