import React, {FC} from 'react';
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {gameActionCreators} from "../../../store/game";

import Button from "../../UI/Button/Button";

import './StartScreen.scss';


const StartScreen: FC = () => {
    const dispatch = useTypedDispatch();
    const lastGame = useTypedSelector(state => state.game.lastGame);

    return (
        <div className="start-screen">
            {lastGame &&
                <h2>
                   GAME OVER
                </h2>
            }

            <h2>Ready to {lastGame ? 'new game' : 'start'} ?</h2>

            <Button onClick={() => dispatch(gameActionCreators.startGame())}>
                Start game
            </Button>

            {lastGame &&
                <>
                    <h3>Your last game:</h3>

                    <ul>
                        <li>
                            <h4>
                                Score: {lastGame.score}
                            </h4>
                        </li>
                    </ul>
                </>
            }
        </div>
    );
};

export default StartScreen;