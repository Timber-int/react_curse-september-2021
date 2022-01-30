import React from "react";

import {useDispatch} from "react-redux";
import {removeCar, returnCarForUpdate} from "../../store";
import css from "./Car.module.css";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.car_box}>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <div className={css.button_box}>
                <button onClick={() => dispatch(removeCar(id))}>Delete</button>
                <button onClick={() => dispatch(returnCarForUpdate(car))}>Update</button>
            </div>
        </div>
    );
};

export {Car};