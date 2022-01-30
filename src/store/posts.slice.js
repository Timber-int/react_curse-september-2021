import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postsService} from "../services";
import {LOADING, REJECTED, RESOLVED} from "../constants";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            const data = await postsService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        status: null,
        errors: null,
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = LOADING;
            state.errors = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.posts = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = REJECTED;
            state.errors = action.payload;
        },

    }
});

const postsReducer = postsSlice.reducer;

export default postsReducer;