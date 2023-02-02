import React, {useEffect, useId} from 'react';

import {useField} from "../../../hooks/useField";
import {useFormContext} from "../../particles/Form/Form";

import "./FormField.css";


const FormField = ({type, label, name, required, ...props}) => {
    const fieldId = useId();

    const {isSubmitting, setValue, setError, errors, values, setValues } = useFormContext();

    const onChange = (value) => {
      setValue(name, value);
    }

    const onError = (errorMessage) => {
      setError(name, errorMessage)
    }

    const Field = useField(type);

    const error = errors[name];

    useEffect(() => {
        if (required && !values[name] && isSubmitting) {
            setError(name, 'Please type required fields')
        }
    }, [isSubmitting]);

    return (
        <div className="form-field">
            <label htmlFor={fieldId}>
                {label}
            </label>

            <Field
                fieldId={fieldId}
                type={type}
                name={name}
                onChange={onChange}
                onError={onError}
                error={error}
                required={required}
                {...props}
            />
        </div>
    );
};

export default FormField;