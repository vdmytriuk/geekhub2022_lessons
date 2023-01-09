import React from 'react';

const DefaultField = ({fieldId, error, ...props}) => {
    return (
        <>
            <input
                id={fieldId}
                aria-describedby={`${fieldId}Error`}
                {...props}
            />

            <span id={`${fieldId}Error`}>
                {error}
            </span>
        </>
    );
};

export default DefaultField;