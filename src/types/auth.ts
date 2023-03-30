export interface Credentials {
  email: string;
  password: string;
  confirmEmail: string,
  confirmPassword: string,
}

export interface CredentialsInvalid {
  email: boolean;
  password: boolean;
  confirmEmail: boolean,
  confirmPassword: boolean,
}
