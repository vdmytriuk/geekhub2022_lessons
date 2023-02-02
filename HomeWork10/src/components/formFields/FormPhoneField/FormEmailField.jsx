import React from 'react';

import DefaultField from "../../fields/DefaultField/DefaultField";
import {validatePhone} from "../../../helpers/validate";

const FormPhoneField = ({
   onChange: propsOnChange,
   onError,
   required,
   ...props
}) => {
    const onChange = (event) => {
        const {value} = event.target;

        onError(validatePhone(value, {required}));
        propsOnChange(value);
    }

    return (
        <DefaultField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormPhoneField;