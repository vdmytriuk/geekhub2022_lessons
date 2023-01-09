import React, {useRef} from 'react';

import Form from "../../particles/Form/Form";
import Button from "../../UI/Button/Button";
import FormField from "../../UI/FormField/FormField";

const ChangePasswordForm = () => {
    const formRef = useRef();

    const onSubmit = (values) => {
      console.log('values', values);
    }

    return (
        <>
            <Form
                ref={formRef}
                title="Change password"
                onSubmit={onSubmit}
            >
                <FormField
                    type="password"
                    name="password"
                    label="Password"
                />

                <FormField
                    type="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                />
            </Form>

            <Button
                onClick={() => formRef.current.submit()}
            >
                Submit
            </Button>
        </>
    );
};

export default ChangePasswordForm;