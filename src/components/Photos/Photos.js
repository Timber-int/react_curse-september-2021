import React from 'react';

import {Photo} from "../Photo/Photo";

const Photos = ({photos}) => {
    return (
        <div>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export {Photos};