import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from './movie.slice';
import pageReducer from './page.slice';
import genresReducer from './genre.slice';
import themeReducer from './theme.slice';

export const store = configureStore({
    reducer: {moviesReducer, pageReducer, genresReducer, themeReducer}
});