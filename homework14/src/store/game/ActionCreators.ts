import {AppDispatch} from "../index";
import {addBalloon, setStarted, removeBalloon, decreaseTime, resetGame, increaseTime} from "./index";


import getRandomNumb from "../../utils/getRandomNumb";

import {IBalloon} from "../../types";

let interval: ReturnType<typeof setInterval>;

const startGame = () => {
    return (dispatch: AppDispatch) => {
        dispatch(setStarted(true));

        interval = setInterval(() => dispatch(decreaseTime()), 100);
    }
}

const stopGame = () => {
    return (dispatch: AppDispatch) => {
        dispatch(setStarted(false));
        dispatch(resetGame());

        clearInterval(interval);
    }
}

const initBalloons = () => {
    return (dispatch: AppDispatch) => {
        let iterationsCount = 1;

        while (iterationsCount < 5) {
            const balloon: IBalloon = {
                id: iterationsCount,
                coordinates: {
                    top: getRandomNumb(100),
                    left: getRandomNumb(100),
                },
                size: getRandomNumb(50, 200)
            }

            dispatch(addBalloon(balloon));

            iterationsCount++;
        }
    }
}

const getShot = (id: number) => {
  return (dispatch: AppDispatch) => {
      dispatch(removeBalloon(id));
      dispatch(increaseTime());

      const balloon: IBalloon = {
          id: Date.now(),
          coordinates: {
              top: getRandomNumb(100),
              left: getRandomNumb(100),
          },
          size: getRandomNumb(50, 200)
      }

      dispatch(addBalloon(balloon));
  }
}

export default {
    startGame,
    stopGame,
    initBalloons,
    getShot
}