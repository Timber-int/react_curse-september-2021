import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {movieService} from '../services';
import {LOADING, REJECTED, RESOLVED} from '../constants';

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const data = await movieService.getAllDiscoverGenre();

            return {genres: data.genres};
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addGenreMovie = createAsyncThunk(
    'genreSlice/addGenreMovie',
    async ({genre}, {rejectWithValue}) => {
        try {
            await genre;
            return {genre: genre};
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const removeGenreMovie = createAsyncThunk(
    'genreSlice/removeGenreMovie',
    async ({genre}, {rejectWithValue}) => {
        try {
            await genre;
            return {genre: genre};
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
        selectedGenres: [],
        status: null,
        error: null,

    },
    extraReducers: {
        [getAllGenres.pending]: (state, action) => {
            state.status = LOADING;
            state.error = null;
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            state.genres = action.payload.genres;
            state.error = null;
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = REJECTED;
            state.error = action.payload;
        },
        [addGenreMovie.pending]: (state, action) => {
            state.status = LOADING;
            state.error = null;
        },
        [addGenreMovie.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            const {id} = action.payload.genre;
            state.selectedGenres.push(action.payload.genre);
            state.genres = state.genres.filter(genre => genre.id !== id);
        },
        [addGenreMovie.rejected]: (state, action) => {
            state.status = REJECTED;
            state.error = action.payload;
        },
        [removeGenreMovie.pending]: (state, action) => {
            state.status = LOADING;
            state.error = null;
        },
        [removeGenreMovie.fulfilled]: (state, action) => {
            state.status = RESOLVED;
            const {id} = action.payload.genre;
            state.genres.push(action.payload.genre);
            state.selectedGenres = state.selectedGenres.filter(selected => selected.id !== id);
        },
        [removeGenreMovie.rejected]: (state, action) => {
            state.status = REJECTED;
            state.error = action.payload;
        }
    }
});

const genresReducer = genreSlice.reducer;

export default genresReducer;
