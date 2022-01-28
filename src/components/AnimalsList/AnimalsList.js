import React, {useReducer} from 'react';

import {v4 as uuid} from 'uuid';
import {AnimalsForm} from "../AnimalsForm/AnimalsForm";
import {CatsList} from "../CatsList/CatsList";
import {DogsList} from "../DogsList/DogsList";
import css from "./AnimalsList.module.css";


const initialState = {
    cats: [],
    dogs: [],
}

const reducerAnimal = (state, action) => {
    switch (action.type) {
        case 'addCat': {
            const cat = action.payload;
            return {
                ...state,
                cats: [...state.cats, cat]
            }
        }
        case 'addDog': {
            const dog = action.payload;
            return {
                ...state,
                dogs: [...state.dogs, dog]
            }
        }
        case 'removeCat': {
            const {id} = action.payload;
            return {
                ...state,
                cats: [...state.cats.filter(cat => cat.id !== id)]
            }
        }
        case 'removeDog': {
            const {id} = action.payload;
            return {
                ...state,
                dogs: [...state.dogs.filter(dog => dog.id !== id)]
            }
        }

    }
}

const AnimalsList = () => {
    const [state, dispatch] = useReducer(reducerAnimal, initialState);

    const onSubmitCat = (e) => {
        e.preventDefault();
        const cat = e.target.cat.value;
        dispatch({type: 'addCat', payload: {id: uuid(), cat}});
    }

    const onSubmitDog = (e) => {
        e.preventDefault();
        const dog = e.target.dog.value;
        dispatch({type: 'addDog', payload: {id: uuid(), dog}});
    }

    const removeCat = (id) => {
        dispatch({type: 'removeCat', payload: {id}})
    }

    const removeDog = (id) => {
        dispatch({type: 'removeDog', payload: {id}})
    }

    return (
        <div>
            <AnimalsForm onSubmitCat={onSubmitCat} onSubmitDog={onSubmitDog}/>
            <hr/>
            <div className={css.animals_container}>
                <div style={{width:"45%"}}>
                    {
                        state.cats.length
                            ?
                            <CatsList cats={state.cats} removeCat={removeCat}/>
                            :
                            <>
                            </>
                    }
                </div>

                <div style={{width:"45%"}}>
                    {
                        state.dogs.length
                            ?
                            <DogsList dogs={state.dogs} removeDog={removeDog}/>
                            :
                            <>
                            </>
                    }
                </div>

            </div>
        </div>
    );
};

export {AnimalsList};