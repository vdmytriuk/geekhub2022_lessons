import React, {createContext, FC, ReactNode, useMemo, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

type ThemeContextProps = {
    children: ReactNode
}

export interface IModeContext {
    toggleColorMode: () => void;
    mode: string;
}

export const ModeContext = createContext<IModeContext>({
    toggleColorMode: () => null,
    mode: "light"
})

const ThemeContext: FC<ThemeContextProps> = ({children}) => {
    const [mode, setMode] = useState<"dark" | "light">("light");

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