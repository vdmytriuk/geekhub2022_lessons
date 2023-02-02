import React, {useEffect} from 'react';

import DefaultField from "../../fields/DefaultField/DefaultField";
import {validateName} from "../../../helpers/validate";

const FormNameField = ({
   onChange: propsOnChange,
   onError,
   required,
   ...props
}) => {
    const onChange = (event) => {
      const {value} = event.target;

      onError(validateName(value, {required}));
      propsOnChange(value);
    }

    useEffect(() => {
        return () => {
            onError(null);
            propsOnChange('');
        }
    }, [])

    return (
        <DefaultField
            {...props}
            onChange={onChange}
        />
    );
};

export default FormNameField;