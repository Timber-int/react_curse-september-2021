import React from 'react';

const Photo = ({photo}) => {
    const {title, url} = photo;
    return (
        <div className="photo-box">
            <div>{title}</div>
            <img style={{width: "100px", height: "100px"}} src={url} alt={title}/>
        </div>
    );
};

export {Photo}