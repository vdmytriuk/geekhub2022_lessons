import React from 'react';

import {Stack, Typography} from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';

import AppStack from "../../layouts/AppStack/AppStack";

const CommentsCounter = ({count, showText}) => {
    return (
        <Stack
            sx={{
                mb: 3
            }}
            direction="row"
            justifyContent="flex-start"
        >

            <AppStack>
                <ForumIcon/>

                <Typography variant="h6">
                    {showText && "Comments count: "}{count}
                </Typography>
            </AppStack>
        </Stack>
    );
};

export default CommentsCounter;