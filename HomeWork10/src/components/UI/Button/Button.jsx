import React from 'react';

const Button = ({children, ...props}) => {
    return (
        <button
            type="submit"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;