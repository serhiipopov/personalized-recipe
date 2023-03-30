import { Errors, FieldData, ValidationFunction } from '../types/validators';

export const validateErrors = (
  fields: Record<string, FieldData>,
  validationFunction: ValidationFunction,
  dependencies: Record<string, any> = {}
): Errors | undefined => {
  const errors = Object.entries(fields).reduce(
    (acc: Errors, [fieldName, fieldData]) => {
      const error = validationFunction(fieldName, fieldData, dependencies);
      return error ? { ...acc, [fieldName]: error } : acc;
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

export const validatePassword = (password: string) => {
  const passwordIsValid = password?.length > 6;

  return passwordIsValid;
}
