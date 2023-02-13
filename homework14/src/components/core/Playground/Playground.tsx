import React, {FC, MouseEvent, useEffect} from 'react';
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {gameActionCreators} from "../../../store/game";

import {IBalloon} from "../../../types";

import Balloon from "../../UI/Balloon/Balloon";

import './PlayGround.scss';

const Playground: FC = () => {
    const dispatch = useTypedDispatch();

    const score: number = useTypedSelector(state => state.game.score);
    const time: number = useTypedSelector(state => state.game.time);
    const balloons: IBalloon[] = useTypedSelector(state => state.game.balloons);

    useEffect(() => {
        dispatch(gameActionCreators.initBalloons());
    }, []);

    useEffect(() => {
        if (time === 0) {
            dispatch(gameActionCreators.stopGame());
        }
    }, [time])

    const shotHandler = (e: MouseEvent<HTMLDivElement>) => {
        const dataId: string | null = (e.target as Element).getAttribute('data-id');

        if (dataId) {
            const balloonId: number = +dataId;

            dispatch(gameActionCreators.getShot(balloonId));
        }
    }

    return (
        <div className="playground">
            <div className="playground__tools">
                <div className="playground__tool">
                    <h3>Total score:</h3>

                    <h4>
                        {score}
                    </h4>
                </div>

                <div className="playground__tool">
                    <h3>Time left:</h3>

                    <h4>
                        {time}
                    </h4>
                </div>
            </div>

            <div
                className="playground__inner"
                onClick={shotHandler}
            >
                {balloons.map(bln => (
                  <Balloon
                      key={bln.id}
                      {...bln}
                  />
                ))}
            </div>
        </div>
    );
};

export default Playground;