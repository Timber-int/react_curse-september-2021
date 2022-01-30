import React, {useEffect, useState} from "react";


import {useDispatch, useSelector} from "react-redux";
import {createCar, updateAuto} from "../../store";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {useForm} from "react-hook-form";
import css from "./CarForm.module.css";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors}, setValue, getValues} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched",
    });

    const dispatch = useDispatch();

    let {carForUpdates} = useSelector(state => state['carReducer']);

    const {id, model, price, year} = carForUpdates;

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [carForUpdates]);

    const onSubmit = (data) => {
        if (id) {
            dispatch(updateAuto({
                id: id,
                model: getValues('model'),
                price: getValues('price'),
                year: getValues('year'),
            }));
            reset();
        } else {
            dispatch(createCar(data));
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form_container}>
            <div><label>Model: <input type="text" {...register("model")} required/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register("price")} required/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register("year")} required/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <div className={css.button_container}>
                <div>
                    <input type="submit" value={"Create"}/>
                </div>
            </div>
        </form>
    );
}

export {CarForm};