import {AppDispatch} from "../index";
import {setLastGame, setStarted} from "./index";

const startGame = () => {
    return (dispatch: AppDispatch) => {
        dispatch(setStarted(true));
    }
}

const stopGame = (score: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(setStarted(false));
        dispatch(setLastGame(score));
    }
}

export {
    startGame,
    stopGame
}