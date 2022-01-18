import React from 'react';

const ChosenUserPost = ({post:{id,body,title}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {ChosenUserPost};