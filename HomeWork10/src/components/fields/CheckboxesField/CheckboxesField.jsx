import React, {useState} from 'react';

import Checkbox from "../../UI/Checkbox/Checkbox";

const CheckboxesField = ({fieldId, error, options, ...props}) => {
    const [value, setValue] = useState([]);

    return (
        <>
            <input
                {...props}
                type="hidden"
                value={value}
            />

            {options.map(option =>
                <Checkbox
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

export default CheckboxesField;