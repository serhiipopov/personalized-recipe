import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Credentials, Login } from '../../types/auth';
import { AuthAPI } from '../../api/api';
import { validateErrors, validateLogin, validateSignUp } from '../../utils/validatiors';
import { storageService } from '../../utils/storageService';

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
      const errors = validateErrors({ email, password, confirmEmail, confirmPassword }, validateSignUp, {})
      if (errors) {
        return rejectWithValue({ errors });
      }

      return await AuthAPI.createUser(email, password)

    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async ({ email, password }: Login, { rejectWithValue }) => {
    try {
      const errors = validateErrors({ email, password }, validateLogin, {})
      if (errors) {
        return rejectWithValue({ errors });
      }

      return await AuthAPI.login(email, password)

    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const logOutAsync = createAsyncThunk(
  'logOut/logOutAsync',
  async (_, { rejectWithValue }) => {

    try {
      const token = await storageService.getStateFromStorage('token')
      if (token) {
        await storageService.removeKey('token')
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
      state.formFields = { ...state.formFields, [id]: value }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.fulfilled.type, (state, action: PayloadAction<AuthState>) => {
        state.formFields = { ...action.payload.formFields };
        state.isAuthenticated = true;
      })
      .addCase(createUserAsync.rejected.type, (state, action: PayloadAction<AuthState>) => {
        state.errors = action.payload.errors
      })
    builder
      .addCase(loginAsync.fulfilled.type, (state, action: PayloadAction<AuthState>) => {
        state.isAuthenticated = true;
      })
      .addCase(loginAsync.rejected.type, (state, action: PayloadAction<AuthState>) => {
        state.errors = action.payload.errors
        state.isAuthenticated = false
      })
    builder
      .addCase(logOutAsync.fulfilled.type, (state) => {
        state.isAuthenticated = false
      })
  }
})

export const {
  resetState,
  setFormFields,
} = authSlice.actions

export default authSlice.reducer;
