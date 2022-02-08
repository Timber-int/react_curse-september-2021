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
    async ({genre}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(addGenreToList({genre}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const removeGenreMovie = createAsyncThunk(
    'genreSlice/removeGenreMovie',
    async ({genre}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(removeGenreToList({genre}));
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: {
        genres: [],
        status: null,
        error: null,
        selectedGenres: [],

    }, reducers: {
        addGenreToList: (state, action) => {
            const {id} = action.payload.genre;
            state.selectedGenres.push(action.payload.genre);
            state.genres = state.genres.filter(genre => genre.id !== id);
        },
        removeGenreToList: (state, action) => {
            const {id} = action.payload.genre;
            state.selectedGenres = state.selectedGenres.filter(selected => selected.id !== id);
            state.genres.push( action.payload.genre);
        }
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
        }
    }
});

const genresReducer = genreSlice.reducer;

const {addGenreToList, removeGenreToList} = genreSlice.actions;

export default genresReducer;
export {addGenreToList, removeGenreToList};