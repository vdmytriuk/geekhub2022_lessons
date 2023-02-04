import React from 'react';

import {Typography} from "@mui/material";

import AppStack from "../../layouts/AppStack/AppStack";

const Author = ({by}) => {
    return (
        <AppStack>
            <Typography variant="h6">
                Posted by:
            </Typography>

            <Typography variant="h6" sx={{color: 'primary.main'}}>
                {by}
            </Typography>
        </AppStack>
    );
};

export default Author;