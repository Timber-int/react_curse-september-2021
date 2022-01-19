import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {photosService} from "../../services/photos-axios.service";
import {Photos} from "../../components/Photos/Photos";
import "./PhotosPage.css";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);

    const {state:id}=useLocation();

    useEffect(() => {
        photosService.getById(id).then(value => setPhotos([...value]));
    }, [id]);

    return (
        <div className="photos-container">
            <Photos photos={photos}/>
        </div>
    );
};

export {PhotosPage};