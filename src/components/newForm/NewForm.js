import React, {useState} from 'react';
import carService from "../../service/car.service";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {newCarFormValidator} from "../../validators/car.validator";

const NewForm = () => {

    const [formError, setFormError] = useState({});

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: joiResolver(newCarFormValidator),
        mode: 'onTouched'
    });

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
    );
};

export default NewForm;