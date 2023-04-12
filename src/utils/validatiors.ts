import { Errors, FieldData, ValidationFunction } from '../types/validators';
import { FormFields } from '../types/auth';
import { STRINGS } from '../constants/strings';

export const validateErrors = (
  fields: FormFields,
  validationFunction: ValidationFunction,
  dependencies: Record<string, any> = {}
): Errors | undefined => {
  const errors = Object.entries(fields).reduce(
    (acc: Errors, [fieldName, fieldData]) => {
      const error = validationFunction(fieldName, fieldData, dependencies);
      return error ? {...acc, [fieldName]: error} : acc;
    },
    {}
  );
  return Object.keys(errors).length > 0 ? errors : undefined;
};

export const validateEmail = (email: string) => {
  const regStr =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regStr.test(String(email).toLowerCase());
};

export const validateName = (name: string) => {
  const regex = /^([A-Za-z])+$/;
  return regex.test(String(name))
};

export const isMaxLength = (value: string, max: number) => {
  return value.length <= max
};

export const validateSignUp = (field: FieldData, value: FieldData) => {
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
    }
  }
  if (confirmEmail) {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (!validateEmail(value as string)) {
      error = STRINGS.inValidEmail;
    }
  }
  if (password) {
    if (!value) {
      error = STRINGS.isRequired;
    } else if (!isMaxLength(value as string,  7)) {
      error = STRINGS.maxLengthPassword;
    }
  }
  if (confirmPassword) {
    if (!value) {
      error = STRINGS.isRequired;
    }
  }
  return error;
}

export const validateLogin = (field: FieldData, value: FieldData) => {
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
    } else if (!isMaxLength(value as string,  7)) {
      error = STRINGS.maxLengthPassword;
    }
  }
  return error;
};
