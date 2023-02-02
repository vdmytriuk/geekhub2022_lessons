import React from 'react';

import DefaultField from "../../fields/DefaultField/DefaultField";
import {validateEmail} from "../../../helpers/validate";

const FormEmailField = ({
   onChange: propsOnChange,
   onError,
   required,
   ...props
}) => {
    const onChange = (event) => {
        const {value} = event.target;

        onError(validateEmail(value, {required}));
        propsOnChange(value);
    }

    return (
        <DefaultField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormEmailField;