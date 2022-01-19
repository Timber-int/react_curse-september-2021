import React from 'react';
import {Photo} from "../Photo/Photo";

const Photos = ({photos}) => {

    return (
        <div>
            {
                photos.map(photo => <Photo photo={photo} key={photo.id}/>)
            }
        </div>
    );
};

export {Photos}