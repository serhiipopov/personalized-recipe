export interface AuthState {
  isAuthenticated: boolean;
  formFields: Credentials;
  errors: Record<string, string>;
}

export interface Credentials {
  email: string
  password: string
  confirmEmail: string;
  confirmPassword: string;
}

export interface Login {
  email: string;
  password: string;
}

export type FormFields = Credentials | Login;
