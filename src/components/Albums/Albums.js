import React, {useState} from 'react';

import {Album} from "../Album/Album";
import {Photos} from "../Photos/Photos";
import {albumsService} from "../../services/albums-axios.service";
import "./Albums.css";

const Albums = ({albums}) => {

    const [photos, setPhotos] = useState([]);

    const getPhotosFromAlbums = (id) => {
        albumsService.getPhotosById(id).then(value => setPhotos([...value]))
    }

    return (
        <div className="albums-wrapper">
            <div className="albums-container">
                {
                    albums.map(album => <Album album={album} key={album.id} getPhotosFromAlbums={getPhotosFromAlbums}/>)
                }
            </div>
            <div className="photos-container">
                <Photos photos={photos}/>
            </div>
        </div>
    );
};

export {Albums}