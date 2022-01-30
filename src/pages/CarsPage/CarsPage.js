import React from "react";

import {CarForm, Cars} from "../../components";

const CarsPage = () => {
    return (
        <div>
            <div>
                <CarForm/>
            </div>
            <div>
                <Cars/>
            </div>
        </div>
    );
};

export {CarsPage};