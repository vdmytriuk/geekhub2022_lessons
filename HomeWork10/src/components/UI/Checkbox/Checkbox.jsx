import React, {useState} from 'react';

const Checkbox = ({value, setValue, label, onChange: propsOnChange, error, fieldId}) => {
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
                {label}
            </label>

            <input
                id={fieldId}
                type="checkbox"
                value={value}
                onChange={propsOnChange
                    ? () => {
                        propsOnChange(checked)
                        setChecked(prevState => !prevState);
                    }
                    :
                    (e) => onChange(e.target.value)}
                checked={checked}
            />

            {error &&
                <span id={`${fieldId}Error`}>
                    {error}
                </span>
            }
        </div>
    );
};

export default Checkbox;