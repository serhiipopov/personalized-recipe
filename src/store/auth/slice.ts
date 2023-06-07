import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Credentials, Login } from '../../types/auth';
import { AuthAPI } from '../../api/services/auth-service';
import { validateErrors, validateLogin, validateSignUp } from '../../utils/validatiors';
import {
  deleteFromStorage,
  deleteTokenFromStorage,
  getTokenFromStorage,
} from '../../utils/secureStore';

export const initialState: AuthState = {
  isAuthenticated: false,
  formFields: {
    email: '',
    password: '',
    confirmEmail: '',
    confirmPassword: '',
  },
  errors: {},
}

export const createUserAsync = createAsyncThunk(
  'createUser/createUserAsync',
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const { email, password, confirmEmail, confirmPassword } = credentials;

      const errors = validateErrors({
        email,
        password,
        confirmEmail,
        confirmPassword
      }, validateSignUp, credentials);
      if (errors) {
        return rejectWithValue({ errors });
      }

      return await AuthAPI.createUser(email, password);

    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error();
      }
      return rejectWithValue(error)
    }
  }
);

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async (login: Login, { rejectWithValue }) => {
   const { email, password } = login
    try {
      const errors = validateErrors({ email, password }, validateLogin, {});
      if (errors) {
        return rejectWithValue({ errors });
      }

      return await AuthAPI.login(email, password)

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 400) {
          throw new Error();
        }
        return rejectWithValue(error)
      }
    }
  }
);

export const logOutAsync = createAsyncThunk(
  'logOut/logOutAsync',
  async (_, { rejectWithValue }) => {

    try {
      const { accessToken } = await getTokenFromStorage()
      if (accessToken) {
        await deleteTokenFromStorage()
        await deleteFromStorage('localId')
      }

      return null
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: () => initialState,
    setFormFields: (state, action: PayloadAction<{ id: string, value: string }>) => {
      const { id, value } = action.payload
      state.formFields = {...state.formFields, [id]: value}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.fulfilled.type, (state, action: PayloadAction<AuthState>) => {
        state.formFields = {...action.payload.formFields};
        state.errors = {};
      })
      .addCase(createUserAsync.rejected.type, (state, action: PayloadAction<AuthState>) => {
        state.errors = action.payload.errors;
      })
    builder
      .addCase(loginAsync.fulfilled.type, (state, action: PayloadAction<AuthState>) => {
        state.isAuthenticated = true;
        state.errors = {};
      })
      .addCase(loginAsync.rejected.type, (state, action: PayloadAction<AuthState>) => {
        state.errors = action.payload.errors;
        state.isAuthenticated = false;
      })
    builder
      .addCase(logOutAsync.fulfilled.type, (state) => {
        state.isAuthenticated = false;
        state.errors = {};
      })
  }
})

export const {
  resetState,
  setFormFields,
} = authSlice.actions

export default authSlice.reducer;
