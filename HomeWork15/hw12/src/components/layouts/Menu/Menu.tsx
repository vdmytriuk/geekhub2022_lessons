import React, {FC, useContext} from 'react';

import CloseIcon from "@mui/icons-material/Close";
import {Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

import {HeaderContext, IHeaderContext} from "../../../store/HeaderContext";

import Logo from "../../particles/Logo/Logo";
import ThemeSwitcher from "../../particles/ThemeSwitcher/ThemeSwitcher";

const Menu: FC = () => {
    const {pages, handleMenuToggle} = useContext<IHeaderContext>(HeaderContext);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100%'
            }}
        >
            <Box sx={{
                display: 'flex',
                pl: 2
            }}>
                <Logo isMenu/>


                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleMenuToggle}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider />

            <List>
                {pages.map((item) => (
                    <ListItem
                        key={item}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <ThemeSwitcher isMenu/>
        </Box>
    );
};

export default Menu;