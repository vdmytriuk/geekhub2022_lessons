import React from 'react';

import PasswordField from "../../fields/PasswordField/PasswordField";

import {validateConfirmPassword} from "../../../helpers/validate";
import {useFormContext} from "../../particles/Form/Form";

const FormConfirmPasswordField = ({
    onChange: propsOnChange,
    onError,
    required,
    ...props
   }) => {
    const {values} = useFormContext();
    const {password} = values;

    const onChange = (event) => {
        const {value} = event.target;

        onError(validateConfirmPassword(password, value, {required}));
    }

    return (
        <PasswordField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormConfirmPasswordField;