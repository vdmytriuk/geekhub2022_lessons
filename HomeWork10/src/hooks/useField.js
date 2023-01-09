import RadioField from "../components/fields/RadioField/RadioField";
import SelectField from "../components/fields/SelectField/SelectField";
import DefaultField from "../components/fields/DefaultField/DefaultField";
import PasswordField from "../components/fields/PasswordField/PasswordField";
import CheckboxesField from "../components/fields/CheckboxesField/CheckboxesField";

export const useField = (type) => {
  let Field;

  switch (type) {
      case "password":
      case "confirmPassword":
          Field = PasswordField;
          break;

      case "select":
          Field = SelectField;
          break;

      case "radio":
          Field = RadioField;
          break;

      case "checkboxes":
          Field = CheckboxesField;
          break;

      default:
          Field = DefaultField;
  }

  return Field;
}