import React, {FC, useContext} from 'react';

import {Box, Drawer} from "@mui/material";

import {HeaderContext, IHeaderContext} from "../../../store/HeaderContext";

import Menu from "../Menu/Menu";

const OffCanvas: FC = () => {
    const {menuVisible, handleMenuToggle} = useContext<IHeaderContext>(HeaderContext);

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={menuVisible}
                onClose={handleMenuToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{display: { xs: 'block', md: 'none' }}}
            >
                <Menu/>
            </Drawer>
        </Box>
    );
};

export default OffCanvas;