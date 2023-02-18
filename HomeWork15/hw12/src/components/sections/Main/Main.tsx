import React from 'react';
import {useLoading} from "../../../hooks/useLoading";

import {Container, List, ListItem} from "@mui/material";

import {fetchAllPersons} from "../../../http/personsApi";

import {IPerson} from "../../../../types/global";

import PersonCard from "../../particles/PersonCard/PersonCard";
import PersonCardSkeleton from "../../particles/PersonCardSkeleton/PersonCardSkeleton";

const Main = () => {
    const [persons, loading] = useLoading<IPerson[]>(fetchAllPersons);

    return (
        <Container maxWidth="md">
            <List
                sx={{
                    mt: 4,
                }}
            >
                {loading
                    ? <PersonCardSkeleton/>

                    : persons && persons.map((item, index) => (
                            <ListItem
                                key={item.name}
                                disablePadding
                            >
                                <PersonCard {...item} count={index + 1}/>
                            </ListItem>
                        ))
                }
            </List>
        </Container>
    );
};

export default Main;