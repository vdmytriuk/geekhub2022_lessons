import React, {useState} from 'react';

import RadioButton from "../../UI/RadioButton/RadioButton";

const RadioField = ({fieldId, error, options, defaultChecked, ...props}) => {
    const [value, setValue] = useState(defaultChecked);

    return (
        <>
            <input
                {...props}
                type="hidden"
                value={value}
            />

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