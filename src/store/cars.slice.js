import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../services";
import {LOADING, REJECTED, RESOLVED} from "../constants";
import axios from "axios";

export const getAllCars = createAsyncThunk(
    'carsSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const data = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const createCar = createAsyncThunk(
    'carsSlice/createCar',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(carAction.addCar({data: newCar}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const removeCar = createAsyncThunk(
    'carsSlice/removeCar',
    async (id, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(carAction.deleteCar({id}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const returnCarForUpdate = createAsyncThunk(
    'carsSlice/returnCarForUpdate',
    async (car, {dispatch, rejectWithValue}) => {
        try {
            return car;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const updateAuto = createAsyncThunk(
    'carsSlice/updateAuto',
    async (data, {dispatch, rejectWithValue}) => {
        try {
            const {id, model, price, year} = data;
            const carAfterUpdate = await carService.updateById(id, {model, price, year});

            dispatch(carAction.updateCar(carAfterUpdate));
        } catch (e) {
            return returnCarForUpdate(e.message);
        }
    }
);


const carsSlice = createSlice({
    name: 'carsSlice',
    initialState: {
        cars: [],
        status: null,
        errors: null,
        carForUpdates: {},
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            const {id} = action.payload;
            state.cars = state.cars.filter(car => car.id !== id);
        },
        updateCar: (state, action) => {
            const {id, model, price, year} = action.payload;
            state.cars = state.cars.map(car => car.id === id ? {model, price, year} : car);
            state.carForUpdates={};
        }
    }, extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        },
        [removeCar.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        },
        [createCar.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [createCar.fulfilled]: (state, action) => {
            state.status = RESOLVED;
        },
        [createCar.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        },
        [returnCarForUpdate.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [returnCarForUpdate.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.carForUpdates = action.payload;
        },
        [returnCarForUpdate.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        },
        [updateAuto.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [updateAuto.fulfilled]: (state, action) => {
            state.status = RESOLVED;

        },
        [updateAuto.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        },

    }
});

const carReducer = carsSlice.reducer;

const {addCar, deleteCar, updateCar} = carsSlice.actions;

export const carAction = {addCar, deleteCar, updateCar};
export default carReducer;