import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from './movie.slice';

export const store = configureStore({
    reducer: {moviesReducer}
});