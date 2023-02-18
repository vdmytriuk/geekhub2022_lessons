import React, {FC, useContext} from 'react';

import {FormControlLabel, FormGroup, Switch} from "@mui/material";

import {ModeContext} from "../../../store/ThemeContext";

import {IsMenu} from "../../../../types/global";

const ThemeSwitcher: FC<IsMenu> = ({isMenu}) => {
    const {toggleColorMode, mode} = useContext(ModeContext);

    return (
        <FormGroup
            sx={{
                display: isMenu ? 'block' : { xs: 'none', md: 'block' },
                mt: isMenu ? 'auto' : 0,
                pl: 2,
                pb: isMenu ? 4 : 0,
            }}
        >
            <FormControlLabel
                control={<Switch/>}
                label="Dark Theme"
                checked={mode === "dark"}
                onChange={toggleColorMode}
            />
        </FormGroup>
    );
};

export default ThemeSwitcher;