import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {commentsService} from "../services";
import {LOADING, REJECTED, RESOLVED} from "../constants";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = commentsService.getAll();

            return comments;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        errors: null,
    },
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        }
    }
});

const commentsReducer = commentsSlice.reducer;

export default commentsReducer;