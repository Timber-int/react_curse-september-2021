import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from './movie.slice';
import pageReducer from './page.slice';

export const store = configureStore({
    reducer: {moviesReducer,pageReducer}
});