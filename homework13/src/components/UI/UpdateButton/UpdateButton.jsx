import React from 'react';

import {Fab, Stack, Typography} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

const UpdateButton = ({updateCallback}) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            gap={2}
            marginBottom={2}
        >
            <Typography variant="h5">
                Click to update
            </Typography>

            <Fab
                color="primary"
                aria-label="reload"
                onClick={updateCallback}
            >
                <CachedIcon />
            </Fab>
        </Stack>
    );
};

export default UpdateButton;