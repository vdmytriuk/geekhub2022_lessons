import React, {useEffect, useState} from 'react';

import RadioButton from "../../UI/RadioButton/RadioButton";

const RadioField = ({fieldId, error, options, defaultChecked, onChange}) => {
    const [value, setValue] = useState(defaultChecked);

    useEffect(() => {
        onChange(value);
    }, [value])

    return (
        <>
            {options.map(option =>
                <RadioButton
                    key={option.value}
                    option={option}
                    value={value}
                    setValue={setValue}
                />
            )}

            <span id={`${fieldId}Error`}>
                {error}
            </span>
        </>
    );
};

export default RadioField;