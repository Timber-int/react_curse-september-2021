import React, {useEffect, useState} from 'react';
import carService from "../../service/car.service";
import Car from "../car/Car";
import {useForm} from "react-hook-form";

const Cars = ({car}) => {
    const [cars, setCars] = useState([]);

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [car]);

    const removeCar = (id) => {
        carService.deleteById(id).then();
        setCars(cars.filter(car => car.id !== id));
    }

    const updateCar = (data) => {
        console.log(data)
        carService.updateById(data.id, {model: data.model, price: data.price, year: data.year}).then(value => value.data);
    }

    return (

        <div>
            <div>
                <label>
                    Form update:
                    <form onSubmit={handleSubmit(updateCar)}>

                        <div>
                            <label>Model: <input
                                type="number"
                                defaultValue={''}
                                {...register('id')}
                                placeholder={"id"}
                            /></label>
                        </div>

                        <div>
                            <label>Model: <input
                                type="text"
                                defaultValue={''}
                                {...register('model')}
                                placeholder={"model"}
                            /></label>
                        </div>

                        <div>
                            <label>Price: <input
                                type="text"
                                defaultValue={''}
                                {...register('price')}
                                placeholder={"price"}
                            /></label>
                        </div>

                        <div>
                            <label>Year: <input
                                type="text"
                                defaultValue={''}
                                {...register('year')}
                                placeholder={"year"}
                            /></label>
                        </div>
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