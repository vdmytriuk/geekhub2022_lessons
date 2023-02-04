import {combineReducers, configureStore} from "@reduxjs/toolkit";

import news from "./news";


const rootReducer = combineReducers({
   news
});

export const store = configureStore({
   reducer: rootReducer
});