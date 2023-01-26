import React from 'react';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Box, Typography} from "@mui/material";

const Logo = ({isMenu}) => {
    return (
        <Box
            sx={{
                mr: 2,
                my: isMenu ? 2 : 0,
                display: isMenu ? 'flex' : { xs: 'none', md: 'flex' },
                flexGrow: 1,
                gap: 1,
            }}
        >
            <StarBorderIcon/>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                SW Persons
            </Typography>
        </Box>
    );
};

export default Logo;