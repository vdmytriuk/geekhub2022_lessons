import React from 'react';

import Checkbox from "../../UI/Checkbox/Checkbox";

import {validateCheckbox} from "../../../helpers/validate";

const FormCheckboxField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...props
}) => {

    const onChange = (value) => {
        propsOnChange(value);
        onError(validateCheckbox(value, {required}));
    }

    return (
        <Checkbox
            {...props}
            onChange={onChange}
        />
    );
};

export default FormCheckboxField;