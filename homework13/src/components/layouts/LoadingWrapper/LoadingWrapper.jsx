import React from 'react';

import {Stack} from "@mui/material";

import Loader from "../../common/Loader/Loader";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import UpdateButton from "../../UI/UpdateButton/UpdateButton";
import BackspaceButton from "../../UI/BackspaceButton/UpdateButton";

const LoadingWrapper = ({
    isLoading = false,
    isError,
    updateCallback,
    isBackspace = false,
    children
}) => {
    return (
        <>
            {updateCallback &&
                <Stack
                    direction="row"
                    justifyContent={isBackspace ? 'space-between' : 'flex-end'}
                    alignItems="center"
                    marginBottom={2}
                >
                    {isBackspace && <BackspaceButton/>}

                    <UpdateButton updateCallback={updateCallback}/>
                </Stack>
            }

            {isLoading
                ? <Loader/>
                : isError
                    ? <ErrorMessage/>
                    : children
            }
        </>
    )
};

export default LoadingWrapper;