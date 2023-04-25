export type FieldData = string | number;

export type ValidationFunction = (
  fieldName: string,
  fieldData: string,
  dependencies: Record<string, any>
) => string | undefined;

export type Errors = Record<string, string>;
