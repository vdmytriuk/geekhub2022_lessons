import React, {useId} from 'react';

const RadioButton = ({option, value, setValue}) => {
    const fieldId = useId();

    return (
        <div>
            <label htmlFor={fieldId}>
                {option.label}
            </label>

            <input
                id={fieldId}
                type="radio"
                value={option.value}
                onChange={(e) => setValue(e.target.value)}
                checked={value === option.value}
            />
        </div>
    );
};

export default RadioButton;