const NAME_REG_EXP = /^[A-Z]{1,10}[a-z]+$/;
const PASS_REG_EXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const EMAIL_REG_EXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REG_EXP = /^(?:38)?(063|068|093|096|097|098)\d{7}$/;

const REQUIRED = 'Required';

export const validateName = (value, {required} = {}) => {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED);
    }

    if (value && !NAME_REG_EXP.test(String(value))) {
        result.push('Invalid value. Only latin letters, first uppercase');
    }

    if (value && value.length < 3) {
        result.push('Must be 3 characters or more');
    }

    return result.length === 0 ? null : result.join(', ');
}

export const validateEmail = (value, {required} = {}) => {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED);
    }

    if (value && !EMAIL_REG_EXP.test(String(value))) {
        result.push('Invalid email');
    }

    return result.length === 0 ? null : result.join(', ');
}

export const validatePhone = (value, {required} = {}) => {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED);
    }

    if (value && !PHONE_REG_EXP.test(String(value))) {
        result.push('Invalid phone number. Valid format: 0931234567 or 380631234560. Valid operators: 063, 067, 068, 093, 096, 097, 098');
    }

    return result.length === 0 ? null : result.join(', ');
}

export const validateCheckboxes = (value, {required} = {}) => {
    const result = [];

    if (required && value.length === 0) {
        result.push(REQUIRED);
    }

    return result.length === 0 ? null : result.join(', ');
}

export const validateCheckbox = (value, {required} = {}) => {
    const result = [];

    if (required && value) {
        result.push(REQUIRED);
    }

    return result.length === 0 ? null : result.join(', ');
}

export const validatePassword = (value, {required} = {}) => {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED);
    }

    if (value && !PASS_REG_EXP.test(String(value))) {
        result.push('Invalid password. Your password must contain: 1 numb, 1 upper and lower letter, 1 special character');
    }

    return result.length === 0 ? null : result.join(', ');
}

export const validateConfirmPassword = (password, confirmPassword, {required} = {}) => {
    const result = [];

    if (required && !confirmPassword) {
        result.push(REQUIRED);
    }

    if (password !== confirmPassword) {
        result.push('Not match!');
    }

    return result.length === 0 ? null : result.join(', ');
}