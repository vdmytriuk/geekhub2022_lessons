import React from 'react';

import {CircularProgress, Stack} from "@mui/material";

const Loader = () => {
    return (
        <Stack justifyContent="center">
            <CircularProgress size={100} sx={{m: 'auto'}}/>
        </Stack>
    );
};

export default Loader;