import React from 'react';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import {Link, Stack} from "@mui/material";

const NewsLink = ({url}) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            mt={2}
            gap={1}
        >
            <OpenInNewIcon/>

            <Link
                variant="h6"
                href={url}
                target="_blank"
                sx={{pointerEvents: 'all'}}
            >
                {url}
            </Link>
        </Stack>
    );
};

export default NewsLink;