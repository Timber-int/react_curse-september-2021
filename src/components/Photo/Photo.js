import React from 'react';

import "./Photo.css";

const Photo = ({photo: {title, url}}) => {
    return (
        <div className="photo-box">
            <div>{title}</div>
            <img style={{width: "100px", height: "100px"}} src={url} alt={title}/>
        </div>
    );
};

export {Photo};