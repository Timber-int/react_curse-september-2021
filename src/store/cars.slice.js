import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../services";
import {LOADING, REJECTED, RESOLVED} from "../constants";

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


const carsSlice = createSlice({
    name: 'carsSlice',
    initialState: {
        cars: [],
        status: null,
        errors: null,
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            const {id} = action.payload;
            state.cars = state.cars.filter(car => car.id !== id);
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
        }
    }
});

const carReducer = carsSlice.reducer;

const {addCar, deleteCar} = carsSlice.actions;

export const carAction = {addCar, deleteCar};
export default carReducer;