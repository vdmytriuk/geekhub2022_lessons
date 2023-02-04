import React from 'react';
import {useNavigate} from "react-router-dom";

import {Fab} from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const BackspaceButton = () => {
    const navigate = useNavigate();

    return (
        <Fab
            color="secondary"
            aria-label="reload"
            onClick={() => navigate(-1)}
        >
            <KeyboardReturnIcon />
        </Fab>
    );
};

export default BackspaceButton;