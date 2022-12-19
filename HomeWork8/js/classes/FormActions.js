export class FormActions {
    constructor(form) {
        this.errors = [];
        this.form = form;
        this.validationFields = form.querySelectorAll('.validate-form-field');
        this.formPrompt = form.querySelector('.form__prompt');
    }

    validateName(name) {
        const re = /^[A-Z]{1,10}[a-z]+$/;
        return re.test(String(name));
    }

    validatePhone(phone) {
        const re = /^(?:38)?(063|068|093|096|097|098)\d{7}$/;
        return re.test(String(phone));
    }

    validatePassword(phone) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(String(phone));
    }

    validateEmail(mail) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail));
    }

    badResult(formField, prompt, text) {
        formField.classList.remove('form-field_correct');
        formField.classList.add('form-field_incorrect');
        prompt.innerText = text;

        this.errors.push(text);
    }

    goodResult(formField, prompt) {
        formField.classList.remove('form-field_incorrect');
        formField.classList.add('form-field_correct');
        prompt.innerText = '';
    }

    validationActions() {
        this.errors = [];

        this.validationFields.forEach(formField => {
            const input = formField.querySelector('.form-field__input');
            const prompt = formField.querySelector('.form-field__prompt');
            const name = input.name;
            const val = input.value;

            if (val === '') {
                this.badResult(formField, prompt, 'Empty field');
            } else {
                this.goodResult(formField, prompt);
            }

            if (val !== '' && name === 'first_name' || name === 'last_name' && val !== '') {
                if (!this.validateName(val)) {
                    this.badResult(formField, prompt, 'Invalid value. Only latin letters , at least 2 letters, first uppercase');
                } else {
                    this.goodResult(formField, prompt);
                }
            }

            if (name === 'email' && val !== '') {
                if (!this.validateEmail(val)) {
                    this.badResult(formField, prompt, 'Invalid email');
                } else {
                    this.goodResult(formField, prompt);
                }
            }

            if (name === 'password' && val !== '') {
                if (!this.validatePassword(val)) {
                    this.badResult(formField, prompt, 'Invalid password. Your password must contain: 1 numb, 1 upper and lower letter, 1 special character');
                } else {
                    this.goodResult(formField, prompt);
                }
            }

            if (name === 'password_confirm' && val !== '') {
                if (val !== this.form.querySelector('input[name="password"]').value) {
                    this.badResult(formField, prompt, 'Password doesn\'t match');
                } else {
                    this.goodResult(formField, prompt);
                }
            }

            if (name === 'phone_number' && val !== '') {
                if (!this.validatePhone(val)) {
                    this.badResult(formField, prompt, 'Invalid phone number. Valid format: 0931234567 or 380631234560. Valid operators: 063, 067, 068, 093, 096, 097, 098');
                } else {
                    this.goodResult(formField, prompt);

                    if (input.value.slice(0, 2) !== '38') {
                        input.value = `38${val}`
                    }
                }
            }
        });

        if (this.errors.length === 0) {
            this.successAction();
        }
    }

    successAction() {
        const formData = new FormData(this.form);

        for (let entry of formData.entries()) {
            console.log(`${entry[0]}: ${entry[1]}`)
        }

        this.formPrompt.classList.add('form__prompt_active');
    }
}
