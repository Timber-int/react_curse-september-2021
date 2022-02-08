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

export const getChosenGenreId = createAsyncThunk(
    'genreSlice/getChosenGenreId',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setChosenGenre({id: id}));
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
        chosenGenre: [],

    }, reducers: {
        setChosenGenre: (state, action) => {
            state.chosenGenre.push([...state.chosenGenre, action.payload.id]);
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

const {setChosenGenre} = genreSlice.actions;

export default genresReducer;
export {setChosenGenre}