import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import carService from "../../service/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const Form = ({update}) => {
    const [formError, setFormError] = useState({});

    // console.log(formError);

    //     // Легка валідація для юзера
    // const onSubmit = (data) => {
    //     // console.log(data);
    //     carService.create(data)
    //         .then(value => console.log(value.data))
    //         .catch(errors => {
    //             // console.log(errors.response.data);
    //             setFormError(errors.response.data);
    //         });
    // }


    const onSubmit = async (car) => {
        try {
            const newCar = await carService.create(car);
            console.log(newCar);
            update(newCar);

        } catch (error) {
            setFormError(errors.response.data);
        }
    }

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator),mode:'onTouched'});

    // watch(value=>console.log(value));

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Model: <input
                        type="text"
                        defaultValue={''}
                        {...register('model')}
                        placeholder={"model"}
                    /></label>
                </div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>{errors.model.message}</span>}
                <div>
                    <label>Price: <input
                        type="text"
                        defaultValue={''}
                        {...register('price')}
                        placeholder={"price"}
                    /></label>
                </div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>{errors.price.message}</span>}

                <div>
                    <label>Year: <input
                        type="text"
                        defaultValue={''}
                        {...register('year')}
                        placeholder={"year"}
                    /></label>
                </div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>{errors.year.message}</span>}
                <div>
                    <button>Save</button>
                </div>
            </form>

        </div>
    );
};

export default Form;