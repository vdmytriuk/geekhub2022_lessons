import React from 'react';

import {Container} from "@mui/material";

import Header from "../Header/Header";

const AppLayout = ({children}) => {
    return (
        <>
         <Header/>

            <Container
                maxWidth="lg"
                sx={{
                    mt: 12,
                    mb: 6
                }}
            >
                {children}
            </Container>
        </>
    );
};

export default AppLayout;