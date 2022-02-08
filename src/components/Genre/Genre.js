import React from 'react';

import {Chip} from '@material-ui/core';

const Genre = ({genre, handleAdd}) => {

    const {id, name} = genre;

    return (
        <Chip
            label={name}
            key={id}
            style={{margin: 2}}
            size='small'
            clickable={true}
            onClick={() => handleAdd(genre)}
        />
    );
};

export {Genre};