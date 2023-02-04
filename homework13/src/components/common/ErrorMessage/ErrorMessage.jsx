import React from 'react';

import {Typography} from "@mui/material";

const ErrorMessage = () => {
    return (
        <Typography
            variant="h2"
            color="error.main"
            align="center"
        >
            Error loading
        </Typography>
    );
};

export default ErrorMessage;