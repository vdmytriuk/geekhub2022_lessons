import React, {FC} from 'react';

import {Box, Divider, List, ListItem, Skeleton} from "@mui/material";

const PersonCardSkeleton: FC = () => {
    return (
        <Box
            sx={{
                display: {xs: 'block', md: 'flex'},
                padding: 2,
                mb: 3,
                width: '100%',
                border: '2px dashed lightgrey',
                borderRadius: 4,
            }}
        >
            <Skeleton
                variant="circular"
                width={150}
                height={150}
            />


            <Box sx={{flexGrow: 1}}>
                <Skeleton variant="text"/>

                <Divider sx={{my: 2}}/>

                <Skeleton variant="text"/>

                <List>
                    <ListItem disablePadding>
                        <Skeleton
                            sx={{
                                width: '100%'
                            }}
                            variant="text"
                        />
                    </ListItem>

                    <ListItem disablePadding>
                        <Skeleton
                            sx={{
                                width: '100%'
                            }}
                            variant="text"
                        />
                    </ListItem>

                    <ListItem disablePadding>
                        <Skeleton
                            sx={{
                                width: '100%'
                            }}
                            variant="text"
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default PersonCardSkeleton;