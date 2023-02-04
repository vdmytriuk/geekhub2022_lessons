import React from 'react';
import {useNewsSelector} from "../../../hooks/useNewsSelector";

import Loader from "../../common/Loader/Loader";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import UpdateButton from "../../UI/UpdateButton/UpdateButton";

const LoadingWrapper = ({updateCallback, children}) => {
    const isError = useNewsSelector('selectIsError');
    const isLoading = useNewsSelector('selectIsLoading');

    return (
        <>
            {updateCallback &&
                <UpdateButton updateCallback={updateCallback}/>
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