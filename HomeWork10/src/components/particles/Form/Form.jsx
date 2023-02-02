import React, {createContext, useContext, useEffect, useImperativeHandle, useRef, useState} from 'react';

import Button from "../../UI/Button/Button";

import "./Form.css";

export const FormContext = createContext({
   values: [],
   errors: [],
   setValue: () => {},
   setValues: () => {},
   setErrors: () => {}
});

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('');
    }

    return context;
}

const Form = React.forwardRef(({children, onSubmit: propsOnSubmit, title, ...props}, ref) => {
    const formRef = useRef();
    const submitRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const isValid = Object.keys(errors).length === 0;

    const setValue = (name, value) => {
      setValues(prevState => {
          const values = JSON.parse(JSON.stringify(prevState));

          if (value) {
              values[name] = value;
          }

          if (!value || value.length === 0 && prevState[name]) {
              delete values[name];
          }

          return values;
      });
    };

    const setError = (name, message) => {
        setErrors(prevState => {
            const errors = JSON.parse(JSON.stringify(prevState));

            if (message) {
                errors[name] = message;
            }

            if (!message && prevState[name]) {
                delete errors[name];
            }

            return errors;
        });
    };

    useImperativeHandle(ref, () => ({
        submit: () => submitRef.current.click()
    }));

    useEffect(() => {
        if (isSubmitting) {
            setAllowSubmit(true)
        }
    }, [isSubmitting]);

    const onSubmit = (e) => {
      e.preventDefault();

      setIsSubmitting(true);

      if (allowSubmit) {
          propsOnSubmit(values);
      }
    };

    return (
        <FormContext.Provider value={{
            isSubmitting,
            setIsSubmitting,
            isValid,
            values,
            errors,
            setValue,
            setError,
        }}>
            <fieldset className="form">
                <legend>{title}</legend>

                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    {...props}
                >
                    {typeof children === 'function' ? children({ isSubmitting, isValid, values, errors}) : children}

                    <input
                        ref={submitRef}
                        type="submit"
                        hidden
                    />

                    <Button
                        onClick={() => submitRef.current.click()}
                        disabled={!isValid}
                    >
                        Submit
                    </Button>
                </form>
            </fieldset>
        </FormContext.Provider>
    );
});

export default Form;