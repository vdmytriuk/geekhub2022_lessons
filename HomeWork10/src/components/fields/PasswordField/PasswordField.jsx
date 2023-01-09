import React, {useState} from 'react';

import eye from "../../../media/eye.svg";
import eye_closed from "../../../media/eye_closed.svg";

import "./PasswordField.css";


const PasswordField = ({fieldId, error, ...props}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="password-field">
            <div
                className="password-field__input"
            >
                <input
                    id={fieldId}
                    aria-describedby={`${fieldId}Error`}
                    {...props}
                    type={isVisible ? "text" : "password"}
                />

                <span
                    onClick={() => setIsVisible(prevState => !prevState)}
                >
                    <img src={isVisible ? eye_closed : eye} alt="Eye"/>
                </span>
            </div>

            <span id={`${fieldId}Error`}>
                {error}
            </span>
        </div>
    );
};

export default PasswordField;