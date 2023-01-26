import React, {createContext, useMemo, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

export const ModeContext = createContext({
    toggleColorMode: () => null,
    mode: "light"
})

const ThemeContext = ({children}) => {
    const [mode, setMode] = useState("light");

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
                mode
            }
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