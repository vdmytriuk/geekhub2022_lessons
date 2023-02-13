import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBalloon} from "../../types";

export interface GameState {
    score: number;
    time: number,
    isStarted: boolean;
    balloons: IBalloon[];
    lastGame?: GameState;
}

const initialState: GameState = {
    score: 0,
    time: 3000,
    isStarted: false,
    balloons: [],
}

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setStarted(state, action: PayloadAction<boolean>) {
            state.isStarted = action.payload;
        },
        decreaseTime(state) {
            state.time = state.time - 100;
        },
        increaseTime(state) {
            state.time = state.time + 500;
        },
        addBalloon(state, action: PayloadAction<IBalloon>) {
            state.balloons = [...state.balloons, action.payload];
        },
        removeBalloon(state, action: PayloadAction<number>) {
            state.score++;
            state.balloons = state.balloons.filter(i => i.id !== action.payload);
        },
        resetGame(state) {
            return {
                ...initialState,
                lastGame: {...state}
            };
        }
    }
});

export default game.reducer;
export const {setStarted, decreaseTime, increaseTime, addBalloon, removeBalloon, resetGame} = game.actions;

export {default as gameActionCreators} from "./ActionCreators";
