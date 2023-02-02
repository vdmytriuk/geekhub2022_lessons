import React, {useState} from 'react';

import DefaultField from "../DefaultField/DefaultField";

import eye from "../../../media/eye.svg";
import eye_closed from "../../../media/eye_closed.svg";

import "./PasswordField.css";


const PasswordField = ({...props}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="password-field">
            <div
                className="password-field__input"
            >
                <DefaultField
                    {...props}
                    type={isVisible ? "text" : "password"}
                />

                <span
                    className="password-field__eye"
                    onClick={() => setIsVisible(prevState => !prevState)}
                >
                    <img src={isVisible ? eye_closed : eye} alt="Eye"/>
                </span>
            </div>
        </div>
    );
};

export default PasswordField;