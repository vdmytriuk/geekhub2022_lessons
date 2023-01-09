import React, {useId, useState} from 'react';

const Checkbox = ({option, value, setValue}) => {
    const fieldId = useId();

    const [checked, setChecked] = useState(false);

    const onChange = (val) => {
        setChecked(prevState => !prevState)

        if (!checked) {
            setValue(prevState => [...prevState, val])

            return;
        }

        setValue(prevState => prevState.filter(i => i !== val));
    }

    return (
        <div>
            <label htmlFor={fieldId}>
                {option.label}
            </label>

            <input
                id={fieldId}
                type="checkbox"
                value={option.value}
                onChange={(e) => onChange(e.target.value)}
                checked={checked}
            />
        </div>
    );
};

export default Checkbox;