import React, {FC} from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";

import Playground from "./components/screens/Playground/Playground";
import StartScreen from "./components/screens/StartScreen/StartScreen";

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