import React from 'react';

import {CssBaseline} from "@mui/material";

import Main from "./components/sections/Main/Main";
import Header from "./components/layouts/Header/Header";
import ThemeContext from "./store/ThemeContext";

const App = () => {
    return (
        <ThemeContext>
            <CssBaseline/>

            <Header/>

            <Main/>
        </ThemeContext>
    );
};

export default App;