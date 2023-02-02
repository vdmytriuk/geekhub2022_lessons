import React from 'react';

import RadioField from "../../fields/RadioField/RadioField";

const FormRadioField = ({
  onChange: propsOnChange,
  onError,
  required,
  ...props
}) => {
    const onChange = (value) => {
        propsOnChange(value);
    }

    return (
        <RadioField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormRadioField;