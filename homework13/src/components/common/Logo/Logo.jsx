import React from 'react';

import {Toolbar, Typography} from "@mui/material";
import {Newspaper} from "@mui/icons-material";

const Logo = () => {
    return (
        <Toolbar>
            <Newspaper/>

            <Typography variant="h6">
                HackerNews
            </Typography>
        </Toolbar>
    );
};

export default Logo;