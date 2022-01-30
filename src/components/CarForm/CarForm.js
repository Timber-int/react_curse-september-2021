import React from 'react';

import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createCar} from "../../store";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched',
    });

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createCar(data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><label>Model: <input type="text" {...register("model")} required/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register("price")} required/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register("year")} required/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <div><input type="submit"/></div>
        </form>
    );
};

export {CarForm};