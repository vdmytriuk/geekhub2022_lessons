import React from 'react';

import {AppBar, Container} from "@mui/material";

import Logo from "../../common/Logo/Logo";
import ThemeModeSwitcher from "../../common/ThemeModeSwitcher/ThemeModeSwitcher";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Container
                maxWidth="xl"
                variant="flex"
                align="center"
                justify="between"
            >
                <Logo/>

                <ThemeModeSwitcher/>
            </Container>
        </AppBar>
    );
};

export default Header;