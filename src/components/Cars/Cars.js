import React, {useEffect} from "react";

import {Car} from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {LOADING} from "../../constants";
import {getAllCars} from "../../store";
import css from "./Cars.module.css";


const Cars = () => {

    const {cars, status, errors} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div className={css.cars_container}>
            {status === LOADING && <center><h1>Loading...</h1></center>}
            {errors && <center><h1>{errors}</h1></center>}
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars}