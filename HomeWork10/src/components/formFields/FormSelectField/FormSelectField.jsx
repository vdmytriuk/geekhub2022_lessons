import React from 'react';

import SelectField from "../../fields/SelectField/SelectField";

const FormSelectField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...props
}) => {
    const onChange = (event) => {
        const {value} = event.target;

        propsOnChange(value);
    }

    return (
        <SelectField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormSelectField;