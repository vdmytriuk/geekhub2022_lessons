import React, {FC} from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";

import Playground from "./components/core/Playground/Playground";
import StartScreen from "./components/core/StartScreen/StartScreen";

const App: FC = () => {
    const isStarted = useTypedSelector(state => state.game.isStarted);

    return (
        <main>
            {isStarted
                ? <Playground/>
                : <StartScreen/>
            }
        </main>
    );
};

export default App;