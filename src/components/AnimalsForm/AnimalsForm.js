import React from 'react';

import css from './AnimalForm.module.css';

const AnimalsForm = ({onSubmitDog, onSubmitCat}) => {

    return (
        <div className={css.forms_container}>
            <form onSubmit={onSubmitCat}>
                <label>Add Cat:
                    <input type="text" name="cat" required/>
                    <input type="submit" value="Save"/>
                </label>
            </form>
            <form onSubmit={onSubmitDog}>
                <label>Add Dog:
                    <input type="text" name="dog" required/>
                    <input type="submit" value="Save"/>
                </label>
            </form>
        </div>
    );
};

export {AnimalsForm};