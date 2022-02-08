import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {movieService} from '../services';
import {LOADING, REJECTED, RESOLVED} from '../constants';

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page, genreForURL}, {rejectWithValue}) => {
        try {
            const data = await movieService.getAllDiscoverMovie(page, genreForURL);

            return {movies: data.results};
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            state.status = LOADING;
            state.error = null;
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.movies = action.payload.movies;
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = REJECTED;
            state.error = action.payload;
        }
    }
});

const moviesReducer = movieSlice.reducer;

export default moviesReducer;

