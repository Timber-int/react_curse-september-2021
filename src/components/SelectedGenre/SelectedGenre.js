import React from 'react';

import {Chip} from '@material-ui/core';

const SelectedGenre = ({genre, handleRemove}) => {

    const {id, name} = genre;

    return (
        <Chip
            label={name}
            key={id}
            style={{margin: 2}}
            size="small"
            color="primary"
            clickable={true}
            onDelete={() => handleRemove(genre)}
        />
    );
};

export {SelectedGenre};