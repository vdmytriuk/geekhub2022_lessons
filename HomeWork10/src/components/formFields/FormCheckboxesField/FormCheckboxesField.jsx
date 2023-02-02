import React from 'react';

import CheckboxesField from "../../fields/CheckboxesField/CheckboxesField";

import {validateCheckboxes} from "../../../helpers/validate";

const FormCheckboxesField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...props
}) => {
    const onChange = (value) => {
        propsOnChange(value);

        onError(validateCheckboxes(value, {required}))
    }

    return (
        <CheckboxesField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormCheckboxesField;