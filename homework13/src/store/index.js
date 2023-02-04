import {combineReducers, configureStore} from "@reduxjs/toolkit";

import news from "./news";
import comments from "./comments";


const rootReducer = combineReducers({
   news,
   comments
});

export const store = configureStore({
   reducer: rootReducer
});