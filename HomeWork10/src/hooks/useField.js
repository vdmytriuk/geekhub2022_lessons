import DefaultField from "../components/fields/DefaultField/DefaultField";
import FormNameField from "../components/formFields/FormNameField/FormNameField";
import FormEmailField from "../components/formFields/FormEmailField/FormEmailField";
import FormPasswordField from "../components/formFields/FormPasswordField/FormPasswordField";
import FormConfirmPasswordField from "../components/formFields/FormConfirmPasswordField/FormConfirmPasswordField";
import FormPhoneField from "../components/formFields/FormPhoneField/FormEmailField";
import FormSelectField from "../components/formFields/FormSelectField/FormSelectField";
import FormRadioField from "../components/formFields/FormRadioField/FormRadioField";
import FormCheckboxesField from "../components/formFields/FormCheckboxesField/FormCheckboxesField";
import FormCheckboxField from "../components/formFields/FormCheckboxField/FormCheckboxField";

export const useField = (type) => {
  switch (type) {
      case "name":
          return FormNameField;

      case "email":
          return FormEmailField;

      case "phone":
          return FormPhoneField;

      case "password":
          return FormPasswordField;

      case "confirmPassword":
          return FormConfirmPasswordField;

      case "select":
          return FormSelectField;

      case "radio":
          return FormRadioField;

      case "checkboxes":
          return FormCheckboxesField;

      case "checkbox":
          return FormCheckboxField;

      default:
          return DefaultField;
  }
}