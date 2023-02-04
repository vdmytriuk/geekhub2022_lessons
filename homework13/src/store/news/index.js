import {createSlice} from "@reduxjs/toolkit";

const news = createSlice({
   name: 'news',
   initialState: {
       itemsIds: [],
       items: [],
       isLoading: true,
       isError: false
   },
   reducers: {
       setNewsIds(state, action) {
           return {
               ...state,
               itemsIds: action.payload
           }
       },
       setNews(state, action) {
           return {
               ...state,
               items: [...state.items, action.payload]
           }
       },
       resetNews(state) {
           return {
               ...state,
               itemIds: [],
               items: []
           }
       },
       setIsLoading(state, action) {
           return {
               ...state,
               isLoading: action.payload
           }
       },
       setIsError(state, action) {
           return {
               ...state,
               isError: action.payload
           }
       }
   }
});

export default news.reducer;
export const {setNewsIds, setNews, resetNews, setIsLoading, setIsError} = news.actions;

export {default as newsOperations} from "./operations";
export {default as newsSelectors} from "./selectors";