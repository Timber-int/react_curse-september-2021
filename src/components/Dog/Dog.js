import React from 'react';

import css from "../Cat/Cat.module.css";

const Dog = ({dog, removeDog}) => {
    return (
        <center>
            <div className={css.dog_box}>
                Name: {dog.dog}
                <button onClick={() => removeDog(dog.id)}>delete</button>
            </div>
        </center>
    );
};

export {Dog};