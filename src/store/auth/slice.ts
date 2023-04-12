import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, Credentials, Login } from '../../types/auth';
import { AuthAPI } from '../../api/api';
import { validateErrors, validateLogin, validateSignUp } from '../../utils/validatiors';

export const initialState: AuthState = {
  token: '',
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
  async (createUser: Credentials, { rejectWithValue }) => {
    try {
      const { email, password, confirmEmail, confirmPassword } = createUser;
      const errors = validateErrors({ email, password, confirmEmail, confirmPassword }, validateSignUp)

      if (errors) {
        return rejectWithValue({ errors });
      }

      const response = await AuthAPI.createUser(email, password)
        .then(response => response)

      return response;

    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async ({ email, password }: Login, { rejectWithValue }) => {
    try {
      const errors = validateErrors({ email, password } , validateLogin)
      if (errors) {
        return rejectWithValue({ errors });
      }
      const response = await AuthAPI.login(email, password)
        .then(response => response)

      return response;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = ''
      state.isAuthenticated = false
    },
    setFormFields: (state, action: PayloadAction<{ id: string, value: string }>) => {
      const { id, value } = action.payload
      state.formFields = { ...state.formFields, [id]: value }
    },
    resetFormFields: (state) => {
      state.formFields = initialState.formFields
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.fulfilled.type, (state, action: PayloadAction<AuthState>) => {
        state.isAuthenticated = true
        state.token = action.payload.token
      })
      .addCase(createUserAsync.rejected.type, (state, action: PayloadAction<AuthState>) => {
        state.errors = action.payload.errors
      })
    builder
      .addCase(loginAsync.fulfilled.type, (state, action: PayloadAction<AuthState>) => {
        state.isAuthenticated = true
        state.token = action.payload.token
      })
      .addCase(loginAsync.rejected.type, (state, action: PayloadAction<AuthState>) => {
        state.errors = action.payload.errors
      })
  }
})

export const {
  logOut,
  setFormFields,
  resetFormFields,
} = authSlice.actions

export default authSlice.reducer;
