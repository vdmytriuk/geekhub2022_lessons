import React, {useImperativeHandle, useRef} from 'react';

import "./Form.css";


const Form = React.forwardRef(({children, onSubmit: propsOnSubmit, title, ...props}, ref) => {
    const formRef = useRef();
    const submitRef = useRef();

    useImperativeHandle(ref, () => ({
        submit: () => submitRef.current.click()
    }));

    const onSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(formRef.current);
      const values = [];

      for (let entry of formData.entries()) {
          values.push(`${entry[0]}: ${entry[1]}`);
      }

      propsOnSubmit(values)
    }

    return (
        <fieldset className="form">
            <legend>{title}</legend>

            <form
                ref={formRef}
                onSubmit={onSubmit}
                {...props}
            >
                {children}

                <input
                    ref={submitRef}
                    type="submit"
                    hidden
                />
            </form>
        </fieldset>
    );
});

export default Form;