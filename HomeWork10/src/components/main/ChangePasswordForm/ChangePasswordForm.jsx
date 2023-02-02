import React, {useRef} from 'react';

import Form from "../../particles/Form/Form";
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
                    required
                />

                <FormField
                    type="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    required
                />
            </Form>
        </>
    );
};

export default ChangePasswordForm;