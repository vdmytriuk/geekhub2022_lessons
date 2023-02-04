import React, {createContext, useContext, useMemo, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

import {green} from "@mui/material/colors";
import {components} from "../style/overrides";

export const ModeContext = createContext({
    toggleColorMode: () => null,
    mode: "dark"
})

export const useModeContext = () => {
    return useContext(ModeContext);
}

const ThemeContext = ({children}) => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode(prevState => prevState === "light" ? "dark" : "light");
            },
            mode,
        }),

        [mode]
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                primary: {
                    main: green[700]
                },
                mode
            },

            components
        }),

        [mode]
    );

    return (
        <ModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ModeContext.Provider>
    );
};

export default ThemeContext;