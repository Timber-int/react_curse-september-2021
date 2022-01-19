import React from 'react';

import "./Album.css";

const Album = ({album: {id, title}, getPhotosFromAlbums}) => {
    return (
        <div className="album-box">
            <div className="album-title" onClick={() => getPhotosFromAlbums(id)}>{id}) {title}</div>

        </div>
    );
};

export {Album};