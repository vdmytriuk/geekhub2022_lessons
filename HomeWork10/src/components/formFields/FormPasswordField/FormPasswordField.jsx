import React from 'react';

import PasswordField from "../../fields/PasswordField/PasswordField";

import {validatePassword} from "../../../helpers/validate";

const FormConfirmPasswordField = ({
    onChange: propsOnChange,
    onError,
    required,
    ...props
   }) => {
    const onChange = (event) => {
        const {value} = event.target;

        onError(validatePassword(value, {required}));
        propsOnChange(value);
    }

    return (
        <PasswordField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormConfirmPasswordField;