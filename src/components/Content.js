import React, {useEffect, useState} from 'react';

import {imageService} from "../services/image-axios.service'";
import {urls} from "../config/urls";


const Content = () => {

    const [imageCard, setImageCard] = useState('');

    const [element, setElement] = useState('');

    useEffect(() => {
        imageService.getImageValue(element).then(value => setImageCard(value));
    }, [imageCard,element]);

    const getImage = (image) => {
        setElement(image);
    }

    const getNewCard = (index) => {
        imageService.getImageValue(index).then(value => setImageCard(value));
    }

    return (
        <div className="wrapper">
            <div className="box1">
                <button onClick={() => getImage(urls.cats)}>Cats</button>
                <button onClick={() => getImage(urls.cars)}>Cars</button>
                <button onClick={() => getImage(urls.dog)}>Dogs</button>
                <button onClick={() => getImage(urls.girls)}>Girls</button>
                <button onClick={() => getImage(urls.notebook)}>Notebook</button>
            </div>

            <div className="box2">
                <img src={imageCard} alt="image"/>
                <button onClick={() => getNewCard(...element)}>Update</button>
            </div>

        </div>
    );
};

export {Content};