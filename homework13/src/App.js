import React from 'react';

import {CssBaseline} from "@mui/material";

import ThemeContext from "./context/ThemeContext";

import AppRouter from "./components/core/AppRouter/AppRouter";
import AppLayout from "./components/layouts/AppLayout/AppLayout";

const App = () => {
    return (
        <ThemeContext>
            <CssBaseline/>

            <AppLayout>
                <AppRouter/>
            </AppLayout>
        </ThemeContext>
    );
};

export default App;