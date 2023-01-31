import React from 'react';

export const Wrapper = ({loading, children}) => {
    if (loading) {
        return <h2>loading...</h2>
    }

    return <div>{children}</div>
}