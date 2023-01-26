import React from 'react';

import {Box, Divider, List, ListItem, ListItemText, Typography} from "@mui/material";

const PersonCard = ({name, height, mass, gender, count}) => {
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
            <Box
                width={150}
                height={150}
                sx={{
                    mr: 2,
                    borderRadius: '50%',
                    border: '2px solid lightgrey',
                    overflow: 'hidden',
                }}
            >
                <img
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    src={`${process.env.REACT_APP_IMAGES_API}${count}.jpg`}
                />
            </Box>


            <Box sx={{flexGrow: 1}}>
                <Typography variant="h4">
                    {name}
                </Typography>

                <Divider sx={{my: 2}}/>

                <Typography
                    variant="h5"
                >
                    Characteristics:
                </Typography>

                <List>
                    <ListItem disablePadding>
                        <ListItemText primary={`Height: ${height}`}/>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemText primary={`Mass: ${mass}`}/>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemText primary={`Gender: ${gender}`}/>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default PersonCard;