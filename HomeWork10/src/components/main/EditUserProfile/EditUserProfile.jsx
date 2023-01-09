import React, {useRef, useState} from 'react';

import Form from "../../particles/Form/Form";
import Button from "../../UI/Button/Button";
import FormField from "../../UI/FormField/FormField";

const EditUserProfile = () => {
    const formRef = useRef();

    const [isGroupAccount, setIsGroupAccount] = useState(false);

    const onSubmit = (values) => {
        console.log('values', values)
    }

    return (
        <>
            <Form
                ref={formRef}
                title="Edit user profile"
                onSubmit={onSubmit}
                noValidate
            >
                <FormField
                    type="checkbox"
                    label="Check isGroup"
                    onChange={() => setIsGroupAccount(prevState => !prevState)}
                />

                {isGroupAccount ? (
                    <FormField
                        type="text"
                        name="title"
                        label="Title"
                    />
                ) : (
                    <>
                        <FormField
                            type="name"
                            name="firstName"
                            label="First Name"
                            placeholder="John"
                        />

                        <FormField
                            required
                            type="name"
                            name="lastName"
                            label="Last Name"
                            placeholder="Smite"
                        />
                    </>
                )}

                <FormField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Type here..."
                />

                <FormField
                    type="phone"
                    name="phone"
                    label="Phone"
                    placeholder="Type here..."
                />

                <FormField
                    type="select"
                    name="gender"
                    label="Gender"
                    options={[
                        { value: 'male', label: 'Male' },
                        { value: 'female', label: 'Female' },
                        { value: 'other', label: 'Unspecified or Nonbinary' }
                    ]}
                />

                <FormField
                    type="radio"
                    name="prefer"
                    label="What do you prefer?"
                    defaultChecked="cola"
                    options={[
                        { value: 'pepsi', label: 'Pepsi' },
                        { value: 'cola', label: 'Cola' }
                    ]}
                />

                <FormField
                    type="checkboxes"
                    name="race"
                    label="Select race"
                    options={[
                        { value: 'unspecified', label: 'Not Reported' },
                        { value: 'preferUnspecified', label: 'Prefer not to answer' },
                        { value: 'AMERICAN_INDIAN_OR_ALASKA_NATIVE', label: 'American Indian or Alaska Native' },
                        { value: 'ASIAN', label: 'Asian' },
                        { value: 'BLACK_OR_AFRICAN_AMERICAN', label: 'Black or African American' },
                        { value: 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER', label: 'Native Hawaiian or Other Pacific Islander' },
                        { value: 'WHITE', label: 'White' }
                    ]}
                />

                <FormField
                    required
                    name="consent"
                    type="checkbox"
                    label={(
                        <>
                            By checking this box, I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                        </>
                    )}
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

export default EditUserProfile;