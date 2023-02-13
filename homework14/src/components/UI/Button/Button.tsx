import React, {FC} from 'react';

import "./Button.scss";

interface ButtonProps {
    onClick: () => void;
    children: string;
}

const Button: FC<ButtonProps> = ({onClick, children}) => {
    return (
        <button
            className="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;