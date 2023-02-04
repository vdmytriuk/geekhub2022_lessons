import React from 'react';

import {Stack} from "@mui/material";

const AppStack = ({children}) => {
    return (
        <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Stack>
    );
};

export default AppStack;