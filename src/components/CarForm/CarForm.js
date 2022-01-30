import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createCar} from "../../store";

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createCar(data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Model: <input type="text" {...register("model")} required/></label>
            <label>Price: <input type="text" {...register("price")} required/></label>
            <label>Year: <input type="text" {...register("year")} required/></label>
            <input type="submit"/>
        </form>
    );
};

export
{
    CarForm
};