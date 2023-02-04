import {createSlice} from "@reduxjs/toolkit";

const comments = createSlice({
    name: 'comments',
    initialState: {
        items: [],
        replies: [],
        isError: false
    },
    reducers: {
        setComments(state, action) {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        },
        setReplies(state, action) {
            return {
                ...state,
                replies: [
                    ...state.replies,
                    {
                        parentId: action.payload.parentId,
                        ids: action.payload.replies.map(i => i.id)
                    }
                ],
                items: [...state.items, ...action.payload.replies]
            }
        },
        resetComments(state) {
            return {
                ...state,
                items: [],
                replies: []
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

export default comments.reducer;
export const {setComments, setReplies, resetComments, setIsError} = comments.actions;

export {default as commentsOperations} from "./operations";
export {default as commentsSelectors} from "./selectors";