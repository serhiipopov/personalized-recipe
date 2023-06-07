import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTokenFromStorage, getToStorageValue } from '../../utils/secureStore';
import { AccountServices } from '../../api/services/account-service';
import { Account, Profile } from '../../types/account';

export const initialState: Account = {
  user: {
    email: '',
    localId: ''
  }
};

export const getProfileAsync = createAsyncThunk(
  'account/profile',
  async (_, {rejectWithValue}) => {
    try {
      const { accessToken } = await getTokenFromStorage();
      const localId = await getToStorageValue('localId');

      if (accessToken !== null && accessToken !== undefined) {
        return await AccountServices.getProfile(accessToken)
          .then(res =>
            res.users.find((user: Profile) => user.localId === localId));
      }

      return null;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  },
);

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {
      builder
        .addCase(getProfileAsync.fulfilled.type, (state, action: PayloadAction<Profile>) => {
          if (action.payload !== null && action.payload !== undefined) {
            state.user = action.payload;
          }
        });
    },
});

export default accountSlice.reducer;
