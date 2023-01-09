import React, {useId} from 'react';
import {useField} from "../../../hooks/useField";

import "./FormField.css";


const FormField = ({type, label, ...props}) => {
    const fieldId = useId();

    const Field = useField(type);

    return (
        <div className="form-field">
            <label htmlFor={fieldId}>
                {label}
            </label>

            <Field
                fieldId={fieldId}
                type={type}
                {...props}
            />
        </div>
    );
};

export default FormField;