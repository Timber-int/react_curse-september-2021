import React, {useEffect, useState} from 'react';
import carService from "../../service/car.service";
import Car from "../car/Car";
import NewForm from "../newForm/NewForm";

const Cars = ({car}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [car]);

    const removeCar = (id) => {
        carService.deleteById(id).then();
        setCars(cars.filter(car => car.id !== id));
    }

    return (
        <div>
            <NewForm/>
            {
                cars.map(car => <Car key={car.id} car={car} removeCar={removeCar}/>)
            }
        </div>
    );
};

export default Cars;