import React, {useEffect, useState} from 'react';

import {useFormContext} from "../../particles/Form/Form";

import Checkbox from "../../UI/Checkbox/Checkbox";

const CheckboxesField = ({fieldId, error, options, onChange}) => {
    const [value, setValue] = useState([]);
    const [firstInit, setFirstInit] = useState(true);

    useEffect(() => {
        if (firstInit) {
            setFirstInit(false);
        }

        if (!firstInit) {
            onChange(value);
        }
    }, [value])

    return (
        <>

            {options.map(option =>
                <Checkbox
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    setValue={setValue}
                />
            )}

            <span id={`${fieldId}Error`}>
                {error}
            </span>
        </>
    );
};

export default CheckboxesField;