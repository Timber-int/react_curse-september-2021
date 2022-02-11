import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {LOADING, REJECTED, RESOLVED} from '../constants';

export const changeTheme = createAsyncThunk(
    'themeSlice/changeTheme',
    async (_, {rejectWithValue}) => {
        try {

        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        theme: true,
    }, extraReducers: {
        [changeTheme.pending]: (state, action) => {
            state.status = LOADING;
            state.error = null;
        },
        [changeTheme.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.theme = !state.theme;

        },
        [changeTheme.rejected]: (state, action) => {
            state.status = REJECTED;
            state.error = action.payload;
        }
    }
});

const themeReducer = themeSlice.reducer;

export default themeReducer;