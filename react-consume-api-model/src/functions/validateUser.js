import { toast } from "react-toastify";
import { isAlphanumeric } from "validator";
import isEmail from "validator/lib/isEmail";

export default function validateUser(nome, email, password = "", id = null) {
  let errors = false;
  if (!id) {
    if (!nome || nome.length < 3 || nome.length > 255) {
      toast.error("Name's length must be between 3 and 255 characters");
      errors = true;
    }
    if (!email || !isEmail(email)) {
      toast.error("Email must be a valid email");
      errors = true;
    }
    errors = passwordValidate(errors, password, true); 
  } else {
    if (nome && (nome.length < 3 || nome.length > 255)) {
      toast.error("Name's length must be between 3 and 255 characters");
      errors = true;
    }
    if (email && !isEmail(email)) {
      toast.error("Email must be a valid email");
      errors = true;
    }
    if (password) {
      errors = passwordValidate(errors, password, false);
    }
  }

  return errors;
}

const passwordValidate = (errors, password, isRequired) => {
  if (isRequired && !password) {
    toast.error("Password is required");
    return true;
  }
  if (password && (password.length < 7 || password.length > 50)) {
    toast.error("Password's length must be between 7 and 50 characters");
    errors = true;
  }
  if (password && !isAlphanumeric(password)) {
    toast.error("Password must contain only numbers and letters");
    errors = true;
  }
  return errors;
};
