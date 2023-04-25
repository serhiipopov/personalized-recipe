import { createSlice } from '@reduxjs/toolkit';
import { MealsState } from '../../types/meals';

const initialState: MealsState = {
  meals: [],
  isLoading: false,
  error: '',
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {}
})

export default mealsSlice.reducer
