import React from 'react';

const SelectField = ({fieldId, error, options, ...props}) => {
    return (
        <>
            <select id={fieldId} {...props}>
                {options.map(opt =>
                    <option
                        key={opt.value}
                        value={opt.value}
                    >
                        {opt.label}
                    </option>
                )}
            </select>

            <span id={`${fieldId}Error`}>
                {error}
            </span>
        </>
    );
};

export default SelectField;