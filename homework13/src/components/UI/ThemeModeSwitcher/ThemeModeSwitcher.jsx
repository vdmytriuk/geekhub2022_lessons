import React from 'react';

import {useModeContext} from "../../../context/ThemeContext";

import {FormControlLabel, Switch} from "@mui/material";

const ThemeModeSwitcher = () => {
    const {mode, toggleColorMode} = useModeContext();

    return (
        <FormControlLabel
            control={<Switch/>}
            label={`${mode} mode using`}
            checked={mode === "dark"}
            onChange={toggleColorMode}
        />
    );
};

export default ThemeModeSwitcher;