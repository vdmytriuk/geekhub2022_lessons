import React from 'react';

import {Typography} from "@mui/material";

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import AppStack from "../../layouts/AppStack/AppStack";

const Rating = ({score}) => {
    return (
        <AppStack>
            <TrendingUpIcon/>

            <Typography variant="h6">
                {score} points
            </Typography>
        </AppStack>
    );
};

export default Rating;