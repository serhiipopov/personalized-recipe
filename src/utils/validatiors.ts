import { Credentials, FormFields } from '../types/auth';
import { STRINGS } from '../constants/strings';

export const validateErrors = <T extends Record<string, any>>(
  fields: FormFields,
  validationFunction: (field: string, value: string, formFields: T) => string | undefined,
  dependencies: T,
) => {
  const errors = Object.entries(fields).reduce((acc, [fieldName, fieldData]) => {
    const error = validationFunction(fieldName, fieldData, dependencies);
    return error ? { ...acc, [fieldName]: error } : acc;
  }, {});

  return Object.keys(errors).length > 0 ? errors : undefined;
};

export const validateEmail = (email: string) => {
  const regStr =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regStr.test(String(email).toLowerCase());
};

export const isOnlyLength = (value: string, max: number) => value.length === max;

export const isEmptyObject = (obj: object) => {
  return !Object.keys(obj).length;
};

export const validateSignUp = (field: string, value: string, formFields: Credentials ) => {
  let error;
  const email = field === 'email';
  const confirmEmail = field === 'confirmEmail';
  const password = field === 'password';
  const confirmPassword = field === 'confirmPassword';

  if (email) {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (!validateEmail(value as string)) {
      error = STRINGS.inValidEmail;
    } else if (confirmEmail && value !== formFields.email) {
      error = STRINGS.emailsDoNotMatch;
    }
  }
  if (confirmEmail) {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (!validateEmail(value as string)) {
      error = STRINGS.inValidEmail;
    } else if (formFields.email && value !== formFields.email) {
      error = STRINGS.emailsDoNotMatch;
    }
  }
  if (password) {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (!isOnlyLength(value as string, 7)) {
      error = STRINGS.maxLengthPassword;
    } else if (confirmPassword && value !== formFields.password) {
      error = STRINGS.passwordsDoNotMatch;
    }
  }
  if (confirmPassword) {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (formFields.password && value !== formFields.password) {
      error = STRINGS.passwordsDoNotMatch;
    }
  }

  return error;
}

export const validateLogin = (field: string, value: string) => {
  let error;
  if (field === 'email') {
      if (!value) {
        error = STRINGS.isRequired;
      } else if (!validateEmail(value as string)) {
        error = STRINGS.inValidEmail;
      }
    }
  if (field === 'password') {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (!isOnlyLength(value as string,  7)) {
      error = STRINGS.maxLengthPassword;
    }
  }

  return error;
};
