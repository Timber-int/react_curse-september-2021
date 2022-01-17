import React from 'react';

const Car = ({car: {id, model, price, year}, removeCar}) => {


    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => removeCar(id)}>Delete car</button>
            <hr/>
        </div>
    );
};

export default Car;