import React, {useEffect, useState} from 'react';
import carService from "../../service/car.service";
import Car from "../car/Car";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {newCarFormValidator} from "../../validators/car.validator";

const Cars = ({car}) => {
    const [cars, setCars] = useState([]);

    const [formError, setFormError] = useState({});

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(newCarFormValidator),
        mode: 'onTouched'
    });

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [car]);

    const removeCar = (id) => {
        carService.deleteById(id).then();
        setCars(cars.filter(car => car.id !== id));
    }

    const updateCar = (data) => {
        try {
            carService.updateById(data.id, {
                model: data.model,
                price: data.price,
                year: data.year
            }).then();
        } catch (e) {
            setFormError(e.response.data);
        }

    }

    return (

        <div>
            <div>
                <label>
                    Form update:
                    <form onSubmit={handleSubmit(updateCar)}>

                        <div>
                            <label>Id: <input
                                type="number"
                                defaultValue={''}
                                {...register('id')}
                                placeholder={"id"}
                            /></label>
                        </div>
                        {errors.id && <span>{errors.id.message}</span>}

                        <div>
                            <label>Model: <input
                                type="text"
                                defaultValue={''}
                                {...register('model')}
                                placeholder={"model"}
                            /></label>
                        </div>
                        {errors.model && <span>{errors.model.message}</span>}
                        <div>
                            <label>Price: <input
                                type="text"
                                defaultValue={''}
                                {...register('price')}
                                placeholder={"price"}
                            /></label>
                        </div>
                        {errors.price && <span>{errors.price.message}</span>}
                        <div>
                            <label>Year: <input
                                type="text"
                                defaultValue={''}
                                {...register('year')}
                                placeholder={"year"}
                            /></label>
                        </div>
                        {errors.year && <span>{errors.year.message}</span>}
                        <div>
                            <button>Update car</button>
                        </div>
                    </form>

                </label>
            </div>

            {
                cars.map(car => <Car key={car.id} car={car} removeCar={removeCar}/>)
            }
        </div>
    );
};

export default Cars;