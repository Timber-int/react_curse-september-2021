import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./cars.slice";

const store = configureStore({
    reducer: {
        carReducer,
    }
});

export default store;