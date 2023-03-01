import React, {FC, MouseEvent, useEffect, useState} from 'react';
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";

import {IBalloon} from "../../../types";

import {stopGame} from "../../../store/game/ActionCreators";

import Balloon from "../../UI/Balloon/Balloon";
import getRandomNumb from "../../../utils/getRandomNumb";

import './PlayGround.scss';

const Playground: FC = () => {
    const dispatch = useTypedDispatch();

    let [int, setInt] = useState<ReturnType<typeof setInterval>>();

    const [score, setScore] = useState(0);
    const [time, setTime] = useState(4000);
    const [balloons, setBalloons] = useState<IBalloon[]>([]);

    const removeBalloon = (id: number) => setBalloons(prevState => prevState.filter(bln => bln.id !== id));

    const increaseTime = () => setTime(prevState => prevState + 400);
    const decreaseTime = () => setTime(prevState => prevState - 100);
    const increaseScore = () => setScore(prevState => prevState + 1);

    const addBalloon = (id: number = Date.now()) => {
        const balloon: IBalloon = {
            id,
            coordinates: {
                top: getRandomNumb(100),
                left: getRandomNumb(100),
            },
            size: getRandomNumb(50, 200)
        }

        setBalloons(prevState => [...prevState, balloon]);
    }

    const initBalloons = () => {
        let iterationsCount = 1;

        while (iterationsCount < 5) {
            addBalloon(iterationsCount);

            iterationsCount++;
        }
    }

    const getShot = (id: number) => {
        increaseScore();
        increaseTime();
        removeBalloon(id);
        addBalloon();
    }

    const shotHandler = (e: MouseEvent<HTMLDivElement>) => {
        const dataId: string | null = (e.target as Element).getAttribute('data-id');

        if (dataId) {
            const balloonId: number = +dataId;

            getShot(balloonId)
        }
    }

    useEffect(() => {
        setInt(setInterval(() => decreaseTime(), 100));

        initBalloons()
    }, []);

    useEffect(() => {
        if (time === 0) {
            clearInterval(int);
            dispatch(stopGame(score));
        }
    }, [time])

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