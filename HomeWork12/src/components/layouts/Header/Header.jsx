import React, {useState} from 'react';

import {
    AppBar,
    Container,
    Toolbar,
    Box,
    IconButton,
    Button,
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import {HeaderContext} from "../../../store/HeaderContext";

import Logo from "../../particles/Logo/Logo";
import OffCanvas from "../OffCanvas/OffCanvas";
import ThemeSwitcher from "../../particles/ThemeSwitcher/ThemeSwitcher";

const pages = ['Docs', 'Contacts', 'About Us', 'Blog'];

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(prevState => !prevState);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        sx={{ mr: 2, display: { md: 'none' } }}
                        onClick={() => setMenuVisible(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Logo/>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {pages.map((item) => (
                            <Button
                                key={item}
                                sx={{ color: '#fff' }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <ThemeSwitcher/>
                </Toolbar>
            </Container>

            <HeaderContext.Provider
                value={{
                    menuVisible,
                    handleMenuToggle,
                    pages
                }}
            >
                <OffCanvas/>
            </HeaderContext.Provider>
        </AppBar>
    );
};

export default Header;