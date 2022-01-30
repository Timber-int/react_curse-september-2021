import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {usersService} from "../services";
import {LOADING, REJECTED, RESOLVED} from "../constants";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const data = await usersService.getAll();

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const usersSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: [],
        status: null,
        errors: null,
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.users = action.payload;
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        }
    }
});

const usersReducer = usersSlice.reducer;

export default usersReducer;