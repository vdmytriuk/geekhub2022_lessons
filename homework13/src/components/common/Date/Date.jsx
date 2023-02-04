import React from 'react';

import {Typography} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {timestampConverter} from "../../../helpers/timestampConverter";

import AppStack from "../../layouts/AppStack/AppStack";

const Date = ({time}) => {
    const date = timestampConverter(time);

    return (
        <AppStack>
            <AccessTimeIcon/>

            <Typography variant="h6">
                {date}
            </Typography>
        </AppStack>
    );
};

export default Date;