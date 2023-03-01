import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GameState {
    isStarted: boolean;
    lastGame?: {
        score: number
    };
}

const initialState: GameState = {
    isStarted: false
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setStarted(state, action: PayloadAction<boolean>) {
            state.isStarted = action.payload;
        },
        setLastGame(state, action: PayloadAction<number>) {
            return {
                ...state,
                lastGame: {
                    score: action.payload,
                }
            }
        }
    }
});

export default game.reducer;
export const {setStarted, setLastGame} = game.actions;
